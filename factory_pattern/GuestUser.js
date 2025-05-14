export default class GuestUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'guest';
  }

  describe() {
    return `User: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }
}