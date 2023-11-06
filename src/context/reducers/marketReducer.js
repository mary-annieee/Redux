const initialState = {
  data: [],
  isLoading: false,
  page: 1,
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MARKET_DATA':
      return {
        ...state,
       isLoading: true,
        page: action.payload.page,
      };

    case 'FETCH_MARKET_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        isLoading: false,
      };

    case 'FETCH_MARKET_DATA_FAILURE':
      return {
        ...state,
        isLoading: false,
      };

    case 'DELETE_LIST_ITEM':
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default marketReducer;
