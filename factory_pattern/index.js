import AdminUser from "./AdminUser.js";
import NormalUser from "./NormalUser.js";
import GuestUser from "./GuestUser.js";

class UserFactory {
  static createUser(type, name, email) {
    switch (type) {
      case 'admin':
        return new AdminUser(name, email);
      case 'normal':
        return new NormalUser(name, email);
      case 'guest':
        return new GuestUser(name, email);
      default:
        throw new Error('Invalid user type');
    }
  }
}
// Example usage
const adminUser = UserFactory.createUser('admin', 'Alice', 'alice@gmail.com');
const normalUser = UserFactory.createUser('normal', 'Bob', 'bob@gmail.com');
const guestUser = UserFactory.createUser('guest', 'Charlie', 'charlie@gmail.com');
console.log(adminUser.describe());
console.log(normalUser.describe());
console.log(guestUser.describe());