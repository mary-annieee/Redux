import { SET_LOADING } from "../actions/marketAction";
const initialState = {
  data: [],
  isLoading: false,
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {

      case 'FETCH_MARKET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
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