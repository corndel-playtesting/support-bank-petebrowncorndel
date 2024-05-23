import { Command } from 'commander'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    console.log(`${from} transferred £${amount} to ${to}.`)
  })

export default transactionController
