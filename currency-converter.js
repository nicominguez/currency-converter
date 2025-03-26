
let eurToUsd = 0.0;
async function fetchExchangeRate() {

  const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
  if (!response.ok) {
    throw new Error('Failed to fetch exchange rate: ' + response.status);
  }
  const data = await response.json()
  eurToUsd = data.rates.USD
  document.getElementById("curRate").textContent = `EUR to USD: ${eurToUsd}`
  return eurToUsd
}
fetchExchangeRate();

const eurEl = document.getElementById("eur")
const usdEl = document.getElementById("usd")
const resultInUSDEl = document.getElementById("resultInUSD")
const resultInEUREl = document.getElementById("resultInEUR")

const eur2usd = () => resultInUSDEl.textContent = `USD: ${(eurEl.value * eurToUsd).toFixed(2)}`
const usd2eur = () => resultInEUREl.textContent = `EUR: ${(usdEl.value / eurToUsd).toFixed(2)}`

