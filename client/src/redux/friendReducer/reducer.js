import Type from "./type";
const INITAIL_STATE = {
  user: null,
  receiver: "",
  friends: [
    {
      id: 1,
      name: "Tom",
      lastMessage: "This is tom",
    },
    {
      id: 2,
      name: "Bob",
      lastMessage: "This is Bob",
    },
    {
      id: 3,
      name: "Tony",
      lastMessage: "This is Tony",
    },
    {
      id: 4,
      name: "Matt",
      lastMessage: "This is Matt",
    },
    {
      id: 5,
      name: "Diana",
      lastMessage: "This is Diana",
    },
    {
      id: 6,
      name: "Jerry",
      lastMessage: "This is Jerry",
    },
    {
      id: 7,
      name: "Leo",
      lastMessage: "This is Leo",
    },
    {
      id: 8,
      name: "John",
      lastMessage: "This is John",
    },
  ],
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
