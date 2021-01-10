import Type from "./type";
const INITAIL_STATE = {
  user: null,
  receiver: "",
  messages: [],
};

const friendReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case Type.SET_RECEIVER:
      return { ...state, receiver: action.payload };

    case Type.SIGN_IN:
      return { ...state, user: action.payload };

    case Type.SIGN_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default friendReducer;
