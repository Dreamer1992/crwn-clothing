import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/config';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shopActions';

import ShopActionTypes from './shopTypes';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
