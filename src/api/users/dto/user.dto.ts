export interface UserDto {
  _id: string,
  /**
   * User name
   * @example "Ruslan"
   */
  name: string,
  /**
   * User surname
   * @example "Zubel"
   */
  surname: string,
  /**
   * User email
   *
   * @example "ruslan.zubel@itechart-group.com"
   */
  email: string,

  /**
   * Path to avatar image
   */
  avatar?: string
}

export interface DbUser extends UserDto {
  password_hash?: string,
  authenticate: (pass: string) => boolean
}

export interface CreateUserDto extends Omit<UserDto, '_id'> {
  password: string,
  repeat_password: string
}

export type UpdateUserDto = Partial<Omit<UserDto, '_id'>>