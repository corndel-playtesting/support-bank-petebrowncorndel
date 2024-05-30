import fs from 'fs/promises'

export async function readJSONTransactions() {
    // Read the Transactions2013.json file
    const transactionsData = await fs.readFile('./data/Transactions2013.json')

    // Use JSON.parse to convert the string into an array of objects
    const transactions = JSON.parse(transactionsData)

    return transactions
}
