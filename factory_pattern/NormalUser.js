export default class NormalUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'normal';
  }
  describe() {
    return `User: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }
}