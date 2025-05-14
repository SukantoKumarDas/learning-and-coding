// Observer Pattern: A design pattern where an object (subject) maintains a list of its dependents (observers) and notifies them of any state changes.
// This is useful for implementing distributed event handling systems.
// Example: A weather station that notifies multiple display devices when the temperature changes.

// Observer Pattern Implementation

// The Subject (Observable)
class NewsChannel {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// The Observer (Interface)
class Observer {
    update(data) {
        throw new Error("Observer's update method must be implemented.");
    }
}

// Concrete Observers
class EmailSubscriber extends Observer {
    update(data) {
        console.log(`📧Email Subscriber: New data received: ${data}`);
    }
}

class SmsSubscriber extends Observer {
    update(data) {
        console.log(`📱SMS Subscriber: New data received: ${data}`);
    }
}

class PushSubscriber extends Observer {
    update(data) {
        console.log(`🔔Push Subscriber: New data received: ${data}`);
    }
}

// Usage
const newsChannel = new NewsChannel();

const email = new EmailSubscriber();
const sms = new SmsSubscriber();
const push = new PushSubscriber();

newsChannel.subscribe(email);
newsChannel.subscribe(sms);
newsChannel.subscribe(push);

newsChannel.notify("Breaking News: Heat wave is comming!");

// Unsubscribe one
newsChannel.unsubscribe(sms);
newsChannel.notify("Update: SMS subscriber has left.");