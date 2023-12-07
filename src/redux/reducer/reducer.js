import Type from "./type";

const INITAIL_STATE = {
  user: null,
  receiver: null,
  messages: [],
  updateMessage: null,
  newTime: "",
};

const reducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case Type.SET_RECEIVER:
      return { ...state, receiver: action.payload };

    case Type.SIGN_IN:
      return { ...state, user: action.payload };

    case Type.SIGN_OUT:
      return { ...state, user: null };
    case Type.SET_UPDATE_MESSAGE:
      return { ...state, updateMessage: action.payload };

    case Type.SET_NEW_TIME:
      return { ...state, newTime: action.payload };
    default:
      return state;
  }
};

export default reducer;
