// sagas/marketDataSaga.js
import { takeLatest, call, put,takeEvery } from 'redux-saga/effects';
import { getMarketData } from '../../services/crptoService';
import { setMarketData,setMarketDataError } from '../actions/marketAction';
import { deleteMarketItem } from '../actions/marketAction';

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

function* handleDeleteMarketItem(action) {
  const { itemId } = action.payload;
  yield put(deleteMarketItem(itemId));
}

export function* watchDeleteMarketItem() {
  yield takeEvery('DELETE_MARKET_ITEM', handleDeleteMarketItem);
}
