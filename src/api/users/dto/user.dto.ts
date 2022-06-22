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
   * @example "ruslan.zubel@itechart-group.com"
   */
  email: string,
}