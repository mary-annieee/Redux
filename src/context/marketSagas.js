import { call, put, takeLatest } from 'redux-saga/effects';
import { getMarketData } from '../services/crptoService';
import { setMarketData } from './marketAction';

function* fetchMarketData() {
  try {
    const marketData = yield call(getMarketData);
    yield put(setMarketData(marketData));
  } catch (error) {
  }
}

export function* watchMarketData() {
  yield takeLatest('FETCH_MARKET_DATA', fetchMarketData);
}
