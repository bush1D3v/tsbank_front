export default class User {
  balance: number;
  cpf: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  constructor(
    balance: number,
    cpf: string,
    email: string,
    id: number,
    name: string,
    phone: string,
  ) {
    this.balance = balance;
    this.cpf = cpf;
    this.email = email;
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}
