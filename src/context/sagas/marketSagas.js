
import { takeLatest, call, put} from 'redux-saga/effects';
import { getMarketData } from '../../services/crptoService';
import { setMarketData,setMarketDataError } from '../actions/marketAction';


function* fetchMarketData() {
  try {
    const marketData = yield call(getMarketData);
    yield put(setMarketData(marketData));
  } catch (error) {
    yield put(setMarketDataError(error.message));
  }
}

export function* watchMarketData() {
  yield takeLatest('FETCH_MARKET_DATA', fetchMarketData);
}

