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

export const checkUserSession = () => ({
  type: userActionsTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionsTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: userActionsTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailed = (error) => ({
  type: userActionsTypes.SIGN_OUT_FAILED,
  payload: error,
});
