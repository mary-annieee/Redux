
const initialState = {
  data: [],
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MARKET_DATA':
      return {
        ...state,
        data: action.payload,
      };
      case 'DELETE_LIST_ITEM':
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload),
        };
    default:
      return state;
  }
};

export default marketReducer;