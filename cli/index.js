import { program } from "commander"
import transactionController from "./transaction.js"
import billSplitter from "./billsplitter.js"
import listCommand from "./list.js"

program.version('0.1.0').description('SupportBank')

program.addCommand(transactionController)
program.addCommand(billSplitter)
program.addCommand(listCommand)

program.parse(process.argv)