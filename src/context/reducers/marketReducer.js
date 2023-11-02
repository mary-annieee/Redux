import { SET_LOADING } from "../actions/marketAction";
const initialState = {
  data: [],
  isLoading: false,
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MARKET_DATA':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
      case 'DELETE_LIST_ITEM':
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload),
        };
        case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
      

    default:
      return state;
  }
};

export default marketReducer;