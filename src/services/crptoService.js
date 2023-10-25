import axios from 'axios';

const formatMarketData = data => data.map(item => ({ ...item }));

export const getMarketData = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d");
    const formattedResponse = formatMarketData(response.data);
    return formattedResponse;
  } catch (error) {
    console.log(error.message);
  }
};