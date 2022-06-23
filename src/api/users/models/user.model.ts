import { compareSync, hashSync } from 'bcrypt';
import mongoose from 'mongoose';
import { DbUser } from '../dto/user.dto';

const UserSchema = new mongoose.Schema<DbUser>({
  name: String,
  surname: String,
  email: {
    type: String,
    unique: true
  },
  password_hash: String,
  avatar: String
})

UserSchema.virtual('password')
  .set(function(password: string) {
    this._password = password;
    this.password_hash = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.methods = {
  authenticate: function(password: string) {
    return compareSync(password, this.password_hash);
  },

  encryptPassword: function(password: string) {
    if (!password) return '';
    try {
      return hashSync(password, 10);
    } catch (err) {
      return '';
    }
  },
};

UserSchema.statics = {
  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */

  load: function(options, cb) {
    options.select = options.select || 'name surname _id email';
    return this.findOne(options.criteria)
      .select(options.select)
      .exec(cb);
  }
};

export const UserModel = mongoose.model('User', UserSchema);
