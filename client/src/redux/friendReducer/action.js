import Types from "./type";
export const setReceiver = (userName) => ({
  type: Types.SET_RECEIVER,
  payload: userName,
});
