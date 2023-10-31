export const SET_MARKET_DATA = 'SET_MARKET_DATA';

export const setMarketData = (data) => {
  return {
    type: SET_MARKET_DATA,
    payload: data,
  };
};
export const setMarketDataError = (error) => ({
  type: 'SET_MARKET_DATA_ERROR',
  error,
});
export const fetchMarketData = () => ({
  type: 'FETCH_MARKET_DATA',
});
export const deleteMarketItem = (itemId) => ({
  type: 'DELETE_MARKET_ITEM',
  payload: itemId,
});