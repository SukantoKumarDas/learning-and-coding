import MessageLogger from "./messageLoger.js";
const messageLoger = new MessageLogger();

export default function firstUser() {
    messageLoger.log("First User Message");
    messageLoger.printLogCount();
}