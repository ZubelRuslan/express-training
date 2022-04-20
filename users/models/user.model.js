import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: {
    type: String,
    unique: true
  },
  password_hash: String
})

UserSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.password_hash = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

UserSchema.methods = {
  authenticate: function(password) {
    return bcrypt.compareSync(password, this.password_hash);
  },

  encryptPassword: function(password) {
    if (!password) return '';
    try {
      return bcrypt.hashSync(password, 10);
    } catch (err) {
      return '';
    }
  },
};

export const UserModel = mongoose.model('User', UserSchema);
