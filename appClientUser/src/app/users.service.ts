export class UsersService{
  private users: string[] = [];
  getUsers(): string[]{
    let resultOfReq: string[] = ['Tom', 'Sam', 'Kat'];

    this.users = resultOfReq;
    return this.users;
  }
}