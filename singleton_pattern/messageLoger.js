export default class MessageLogger {
  constructor() {
    if (MessageLogger._instance) {
      return MessageLogger._instance;
    }
    this.logs = [];
    MessageLogger._instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`[${timestamp}] ${message}`);
  }

  printLogCount() {
    const count = this.logs.length;
    console.log(`Total logs: ${count}`);
  }
}