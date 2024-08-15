document.addEventListener('DOMContentLoaded', async function () {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const convertedAmountInput = document.getElementById('convertedAmount');
  
    // Fetch list of currencies from the API
    const currenciesResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const currenciesData = await currenciesResponse.json();
    const currencies = Object.keys(currenciesData.rates);
  
    // Populate currency select options
    currencies.forEach(currency => {
      const option1 = document.createElement('option');
      option1.value = currency;
      option1.textContent = currency;
      fromCurrencySelect.appendChild(option1);
  
      const option2 = document.createElement('option');
      option2.value = currency;
      option2.textContent = currency;
      toCurrencySelect.appendChild(option2);
    });
  
    // Event listener for convert button
    function convertCurrency() {
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
      const amount = parseFloat(amountInput.value);
  
      const rate = currenciesData.rates[toCurrency] / currenciesData.rates[fromCurrency];
      const convertedAmount = amount * rate;
      convertedAmountInput.value = convertedAmount.toFixed(2);
    }
  
    document.getElementById('convertBtn').addEventListener('click', convertCurrency);
  });
  async function convertCurrency() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const convertedAmountInput = document.getElementById('convertedAmount');

    // Fetch list of currencies from the API
    const currenciesResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const currenciesData = await currenciesResponse.json();

    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    const rate = currenciesData.rates[toCurrency] / currenciesData.rates[fromCurrency];
    const convertedAmount = amount * rate;
    convertedAmountInput.value = convertedAmount.toFixed(2);
}

document.getElementById('convertBtn').addEventListener('click', convertCurrency);