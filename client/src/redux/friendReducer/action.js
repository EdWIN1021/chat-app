import Types from "./type";
export const setReceiver = (userName) => ({
  type: Types.SET_RECEIVER,
  payload: userName,
});

export const signIn = (user) => ({
  type: Types.SIGN_IN,
  payload: user,
});

export const signOut = () => ({
  type: Types.SIGN_OUT,
});
