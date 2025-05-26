/*
  Decorator Factory: It's a function that returns a decorator.
  Decorators are functions that can modify classes, methods, properties, or parameters.
  Decorator factories are useful when you want to pass parameters to your decorators.
  In this example, we create a decorator factory that logs a message when the class is defined.
  Decorators can be used to add metadata, modify behavior, or perform side effects.
  Decorators are a stage 2 proposal for JavaScript and are available in TypeScript.
  Decorators are applied at runtime, so they can access the class or method they are decorating.
*/
function logger(target: Function, message: string) {
  console.log(target);
}

function loggerDecorator(message: string) {
  return function (target: Function) {
    console.log(`${message}:`, target);
  };
}

// loggerDecorator is a decorator factory
@loggerDecorator('User class decorator')
class User{
    name: string = 'John';
    age: number = 28;

    constructor(){
        console.log('User class constructor called...')
    }
}