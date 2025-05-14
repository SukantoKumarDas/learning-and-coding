// Builder Pattern Example
// The Builder Pattern is a creational design pattern that allows for the step-by-step construction of complex objects.
// It separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
// In this example, we will create a User object using the Builder Pattern.
// The User object will have properties like name, email, phone, and address.
// The Builder Pattern is useful when an object needs to be created with many optional parameters or when the construction process is complex.
// The Builder Pattern allows for a more readable and maintainable code structure.
class User {
    constructor(name, email, phone, address) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}

class UserBuilder {
    constructor(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    build() {
        return new User(this.name, this.email, this.phone, this.address);
    }
}

const user1 = new UserBuilder('John Doe')
    .setPhone('123-456-7890')
    .setAddress('123 Main St, Springfield, USA')
    .build();
console.log(user1);
const user2 = new UserBuilder('Jane Doe')
    .setEmail('jane@gmail.com')
    .setAddress('456 Elm St, Springfield, USA')
    .build();
console.log(user2);

