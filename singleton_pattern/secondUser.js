import MessageLogger from "./messageLoger.js";
const messageLogger = new MessageLogger();

export default function secondUser() {
    messageLogger.log("Second User Message");
    messageLogger.printLogCount();
}