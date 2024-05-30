import { Command } from 'commander'
import { Transaction } from '../models/transaction.js'

const listCommand = new Command('list')

listCommand
  .command('all')
  .description('Log amount to be paid each')
  .action(async () => {
    const transaction = new Transaction()
    const totals = await transaction.calculateTotals()
    
    for (const [name, total] of Object.entries(totals)) {
      console.log(`${name}: £${total.toFixed(2)}`)
    }
  })

  listCommand
  .command('account <accountname>')
  .description('Log transactions for a user')
  .action(async (accountName) => {
    const transaction = new Transaction()
    const transactions = await transaction.getTransactionsByAccount(accountName)
    console.table(transactions)
    })


export default listCommand