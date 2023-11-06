import {takeLatest, call, put} from 'redux-saga/effects';
import {
  fetchMarketDataFailure,
  fetchMarketDataSuccess,
} from '../actions/marketAction';
import apiClient from '../../services/ApiKit';

function* fetchMarketData(action) {
  const { page } = action.payload;
  console.log('Fetching data for page:', page);
  const data = {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page,
      sparkline: true,
      price_change_percentage: '7d',
    },
  };
  try {
    const marketData = yield call(apiClient.get, '/coins/markets', data);
    yield put(fetchMarketDataSuccess(marketData));
  } catch (error) {
    yield put(fetchMarketDataFailure(error.message));
  }
}

export function* watchMarketData() {
  yield takeLatest('FETCH_MARKET_DATA', fetchMarketData);
}
