export class Registeruser {
  name: string;
  email: string;
  username: string;
  password: string;

  constructor(name: string, email: string, username: string, password: string){
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}
