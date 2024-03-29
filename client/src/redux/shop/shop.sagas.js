import { takeLatest, call, put, all  } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utilis';

import {
fetchCollectionsSuccess,
fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {


	try {

    const collectionRef = firestore.collection('collections');
  	const snapshot = yield collectionRef.get();
  	const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
  	yield put(fetchCollectionsSuccess(collectionsMap));
} catch (error) {
	yield put(fetchCollectionsFailure(error.message));
}

    /*
    //dispatch(fetchCollectionsStart());
	//collectionRef.get().then(snapshot => {
  	//const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  	//dispatch(fetchCollectionsSuccess(collectionsMap));
  //	updateCollections(collectionsMap);
//  	this.setState({ loading: false });
  	//})
  	//.catch(error => dispatch(fetchCollectionsFailure(error.message)));
//}
*/
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, 
		fetchCollectionsAsync
);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
