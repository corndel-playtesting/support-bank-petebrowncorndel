import { Command } from 'commander'

const billSplitter = new Command('split')

billSplitter
  .command('log <total> <people>')
  .description('Log ammount to be paid each')
  .action((total, people) => {
    const priceEach = total / people
    console.log(`£${priceEach} should be paid each.`)
  })

export default billSplitter