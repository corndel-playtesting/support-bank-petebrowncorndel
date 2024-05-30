import fs from 'fs/promises'

export class Transaction {
  constructor(date, from, to, narrative, amount) {
    this.date = date
    this.from = from
    this.to = to
    this.narrative = narrative
    this.amount = amount
  }

  async parseCSV() {
    const path = './data/Transactions2014.csv'
    const txt = await fs.readFile(path, 'utf-8')
    const transactionRows = txt.split('\n')
    const transactionArray = transactionRows.map((transaction) =>
      transaction.split(',')
    )
    const transactionArrayWithoutHeader = transactionArray.slice(1)
    return transactionArrayWithoutHeader
  }

  async calculateTotals() {
    const transactions = await this.parseCSV()
    const totals = {}

    transactions.forEach((transaction) => {
      const [date, from, to, narrative, amount] = transaction
      if (!totals[from]) totals[from] = 0
      if (!totals[to]) totals[to] = 0

      totals[from] -= parseFloat(amount)
      totals[to] += parseFloat(amount)
    })

    return totals
  }

  async getTransactionsByAccount(accountName) {
    const transactions = await this.parseCSV()
    return transactions
      .filter((transaction) => {
        const [date, from, to, narrative, amount] = transaction
        return from.toLowerCase() === accountName.toLowerCase() || to.toLowerCase() === accountName.toLowerCase()
      })
      .map((transaction) => {
        const [date, from, to, narrative, amount] = transaction
        return { date, from, to, narrative, amount }
      })
  }

}
