const initialState = {
  data: [],
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MARKET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default marketReducer;