import { Command } from 'commander'
import { Bill } from '../models/bill.js'

const billSplitter = new Command('split')

billSplitter
  .command('log <total> <people>')
  .description('Log ammount to be paid each')
  .action((total, people) => {
    const bill = new Bill(parseFloat(total))
    const priceEach = bill.split(parseInt(people))
    console.log(`£${priceEach} should be paid each.`)
  })

export default billSplitter