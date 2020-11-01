import userActionsTypes from "./userActionTypes";

export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: userActionsTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error) => ({
  type: userActionsTypes.SIGN_IN_FAILED,
  payload: error,
});