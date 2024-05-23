import { program } from "commander"
import transactionController from "./transaction.js";
import billSplitter from "./billsplitter.js";

program.version('0.1.0').description('SupportBank')

program.addCommand(transactionController)
program.addCommand(billSplitter)

program.parse(process.argv)