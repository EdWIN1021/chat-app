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

export const setNewTime = (time) => ({
  type: Types.SET_NEW_TIME,
  payload: time,
});

export const setUpdateMesaage = (updateMessage) => ({
  type: Types.SET_UPDATE_MESSAGE,
  payload: updateMessage,
});
