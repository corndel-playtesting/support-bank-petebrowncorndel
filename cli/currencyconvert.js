import { Command } from 'commander'

const currencyConvert = new Command('convert')

currencyConvert
  .command('log <amount> <from> <to>')
  .description('Log ammount of converted currency')
  .action((amount, from, to) => {
    const converted = amount * from * to
    console.log(`£${converted} should be paid each.`)
  })

export default currencyConvert