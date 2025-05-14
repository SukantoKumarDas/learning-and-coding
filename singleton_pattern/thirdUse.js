import MessageLogger from "./messageLoger.js";
const messageLogger = new MessageLogger();

export default function thirdUser() {
    messageLogger.log("Third User Message");
    messageLogger.printLogCount();
}