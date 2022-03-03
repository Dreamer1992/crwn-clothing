import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSagas';

export default function* Sagas() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
