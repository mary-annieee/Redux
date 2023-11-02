
import { takeLatest, call, put} from 'redux-saga/effects';
import { getMarketData } from '../../services/crptoServices';
import {fetchMarketDataFailiure,setLoading,fetchMarketDataSuccess} from '../actions/marketAction';


function* fetchMarketData() {
  try {
    yield put(setLoading(true)); 
    const marketData = yield call(getMarketData);
    yield put(setLoading(false));
    yield put(fetchMarketDataSuccess(marketData));
  } catch (error) {
    yield put(fetchMarketDataFailiure(error.message));
  }
  
}

export function* watchMarketData() {
  yield takeLatest('FETCH_MARKET_DATA', fetchMarketData);
}

