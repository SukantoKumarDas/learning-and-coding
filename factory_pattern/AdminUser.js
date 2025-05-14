export default class AdminUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'admin';
  }

  describe() {
    return `User: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }
}