
export const fetchMarketData = () => ({
  type: 'FETCH_MARKET_DATA',
  
});
export const fetchMarketDataSuccess = (data) => ({
  type: 'FETCH_MARKET_DATA_SUCCESS',
  payload: data,
});

export const fetchMarketDataFailiure = (error) => ({
  type: 'FETCH_MARKET_DATA_FAILIURE',
  error,
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
