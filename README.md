# learning-and-coding
Design Pattern:
Design patterns in Software Engineering are some useful methods, developers use to solve the frequently occurring problems in software development.

We can divide them into the following groups.
Creational Pattern: Singleton, Factory, Builder.
Behavioral Pattern: Strategy, Observer.
Structural Pattern: Decorator, Facade.

Singleton: Suppose we want to make a logger for the whole project that will be used by all objects to log messages or errors. So, all the objects must use the same instance of a logger. Here, the singleton pattern helps to make sure that only one object of the log class is created.

Factory: Suppose there are different types of users in a system. If we use the factory pattern, it will hide the complex creation logic and provide a common interface for creating multiple types of users.

Builder: This helps to create a object creation intereface that will create a base object then provide the customisation option and finally build object.

Strategy: This pattern helps to switch between different algorithms dynamically without knowing the complexities of those algorithms.

Observer: This pattern helps to subscribe or unsubscribe an observer (a type of object) by different observers (other types of objects). If there is any change in the observer, the observer can notify the subscribed objects. It makes a one-to-many relationship between the objects.

Decorator: If we need to add more functionalities to an object without affecting the other objects created from the same class, we can use the decorator pattern.

Facade: Provides a simplified interface to the client for multiple sub-systems. For example, we can make a simplified Api Call function for all types of api calling rather than making multiple function for making different types of api call. 
