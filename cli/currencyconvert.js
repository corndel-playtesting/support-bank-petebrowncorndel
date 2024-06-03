import { Command } from 'commander';
import 'dotenv/config';
import currencyConverter from '../models/currencyConverter.js';

const convertController = new Command('currency');

convertController
  .command('convert <amount> <from> <to>')
  .description('Convert currency')
  .action(async (amount, from, to) => {
    try {
      const convertedAmount = await currencyConverter.convert(amount, from, to);
      console.log(`${amount} ${from} is equal to ${convertedAmount} ${to}`);
    } catch (error) {
      console.error('Error converting currency:', error.message);
    }
  });

export default convertController;