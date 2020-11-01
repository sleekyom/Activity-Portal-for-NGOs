import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionsTypes from "./userActionTypes";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/db";

import {
  signInFailed,
  signInSuccess,
} from "./userActions";


export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapShot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
  ]);
}