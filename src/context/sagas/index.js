import { all } from 'redux-saga/effects';
import { watchMarketData} from './marketSagas';

export default function* rootSaga() {
  yield all([watchMarketData()]);
}