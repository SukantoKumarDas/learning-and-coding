// Decorator Pattern
// The decorator pattern is a structural design pattern that allows behavior to be added to individual objects, 
// either statically or dynamically, without affecting the behavior of other objects from the same class.
// It is a flexible alternative to subclassing for extending functionality.
// In this example, we will create a simple coffee shop application where we can add different condiments to our coffee.
// The base component is the Coffee class, and we will create decorators for different condiments like Milk and Sugar.
// The Coffee class will have a cost method that returns the cost of the coffee, and the decorators will override this method
// to add the cost of the condiment.
// The decorator pattern is useful when you want to add responsibilities to individual objects dynamically and
// transparently, without affecting other objects. It is also useful when you want to add functionality to classes in a flexible and reusable way.
// The decorator pattern is often used in GUI frameworks, where you can add functionality to components without modifying their code.
// The decorator pattern is also used in Java I/O classes, where you can add functionality to streams without modifying their code.

class Coffee {
  cost() {
    return 100;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 40;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 20;
  }
}

// Usage
const coffee = new Coffee();
const milkCoffee = new MilkDecorator(coffee);
const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(`Cost of row coffee: $${coffee.cost()}`); // Cost of coffee: $5
console.log(`Cost of milk coffee: $${milkCoffee.cost()}`); // Cost of milk coffee: $6
console.log(`Cost of milk coffee with sugar: $${sugarMilkCoffee.cost()}`); // Cost of sugar milk coffee: $6.5