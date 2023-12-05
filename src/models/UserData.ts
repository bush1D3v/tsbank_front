import User from "./User";

export default class UserData extends User {
  token: string;
  constructor(token: string, user: User) {
    super(
      user.balance,
      user.cpf,
      user.email,
      user.id,
      user.name,
      user.phone
    );
    this.token = token;
  }
}
