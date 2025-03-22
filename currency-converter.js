let eurToUsd = 1.1;

async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR'); 
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }
    const data = await response.json();
    eurToUsd = data.rates.USD; 
    console.log(`Updated EUR to USD rate: ${eurToUsd}`);
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
  }
}
fetchExchangeRate();

function convertEurToUsd() {
  const eur = document.getElementById("eur").value;
  const result = (eur * eurToUsd).toFixed(2);
  document.getElementById("resultInUSD").textContent = `USD: ${result}`;
}

function convertUsdToEur() {
  const usd = document.getElementById("usd").value;
  const result = (usd / eurToUsd).toFixed(2);
  document.getElementById("resultInEUR").textContent = `EUR: ${result}`;
}
