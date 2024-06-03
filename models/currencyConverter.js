class CurrencyConverter {
    async convert(amount, from, to) {
      const domain = 'https://openexchangerates.org';
      const endpoint = `/api/latest.json?app_id=${process.env.OPENEXCHANGERATES_API_KEY}`;
  
      try {
        const response = await fetch(`${domain}${endpoint}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        const rates = data.rates;
  
        if (!rates[from] || !rates[to]) {
          throw new Error('Invalid currency');
        }
  
        const convertedAmount = amount * (rates[to] / rates[from]);
        return convertedAmount;
      } catch (error) {
        console.error('Error converting currency:', error.message);
        throw error;
      }
    }
  }
  
  export default new CurrencyConverter();