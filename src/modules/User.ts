import JwtDecode from "jwt-decode";

export default class User {
  public static from(token: string) {
    try {
      const obj = JwtDecode(token);
      return new User(obj);
    } catch (_) {
      return null;
    }
  }

  public id: string;
  public permissions: object;
  public admin: boolean;

  constructor({ user_id, permissions, admin }: any) {
    this.id = user_id;
    this.permissions = permissions;
    this.admin = admin;
  }

}
