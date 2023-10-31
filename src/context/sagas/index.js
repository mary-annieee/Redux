import { all } from 'redux-saga/effects';
import { watchMarketData,watchDeleteMarketItem } from './marketSagas';

export default function* rootSaga() {
  yield all([watchMarketData(),watchDeleteMarketItem()]);
}