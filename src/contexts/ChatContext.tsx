import {
  arrayUnion,
  doc,
  onSnapshot,
  //   collection,
  //   getDocs,
  updateDoc,
} from "firebase/firestore";
import {
  ReactNode,
  createContext,
  FC,
  useState,
  //   useEffect,
  useContext,
  useEffect,
} from "react";
import { db } from "../lib/firebase";
import { AuthContext } from "./AuthContext";
import { Unsubscribe } from "firebase/auth";
import { Friend } from "../types";

export interface Message {
  content: string;
  receiver: string;
  sender: string;
  createdAt: Date;
}

interface ChatContextProps {
  chatId: string;
  receiver: Friend | null;
  messages: Message[];
  updateChatId: (chatId: string) => void;
  updateReceiver: (receiver: Friend) => void;
  sendMessage: (content: string) => void;
}

export const ChatContext = createContext<ChatContextProps>({
  chatId: "",
  receiver: null,
  messages: [],
  updateChatId: () => {},
  updateReceiver: () => {},
  sendMessage: () => {},
});

const ChatProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [chatId, setChatId] = useState("");
  const [receiver, setReceiver] = useState<Friend | null>(null);

  const { user } = useContext(AuthContext);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;

    (async () => {
      if (chatId) {
        unsubscribe = onSnapshot(doc(db, "chats", chatId), (doc) => {
          setMessages(
            doc
              .data()
              ?.messages.sort(
                (a: Message, b: Message) =>
                  Number(a.createdAt) - Number(b.createdAt)
              )
          );
        });
      }
    })();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [chatId]);

  const updateChatId = (chatId: string) => setChatId(chatId);
  const updateReceiver = (receiver: Friend) => setReceiver(receiver);
  const sendMessage = async (content: string) => {
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        content,
        sender: user?.uid,
        receiver: receiver?.userId,
        createdAt: new Date(),
      }),
    });
  };

  const contextValue: ChatContextProps = {
    chatId,
    receiver,
    messages,
    sendMessage,
    updateChatId,
    updateReceiver,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
