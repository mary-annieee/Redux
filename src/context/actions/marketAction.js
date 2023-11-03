export const fetchMarketData = (page) => ({
  type: 'FETCH_MARKET_DATA',
  payload: {page},
});
export const fetchMarketDataSuccess = data => ({
  type: 'FETCH_MARKET_DATA_SUCCESS',
  payload: data,
});

export const fetchMarketDataFailure = error => ({
  type: 'FETCH_MARKET_DATA_FAILURE',
  error,
});

export const deleteListItem = itemId => ({
  type: 'DELETE_LIST_ITEM',
  payload: itemId,
});
