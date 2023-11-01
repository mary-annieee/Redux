
export const setMarketData = (data) => {
  return {
    type: 'SET_MARKET_DATA',
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

export const deleteListItem = (itemId) => ({
  type: 'DELETE_LIST_ITEM',
  payload: itemId,
});
export const SET_LOADING = 'SET_LOADING';

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});