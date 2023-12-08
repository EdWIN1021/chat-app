import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useState } from "react";
import { ChatContext } from "../contexts/ChatContext";

const SendMessage = () => {
  const { sendMessage } = useContext(ChatContext);
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await sendMessage(content);
    setContent("");
  };

  return (
    <form
      style={{
        display: "flex",
        gap: 15,
        padding: "2% 4%",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        color="primary"
        size="small"
        value={content}
        placeholder="Type a message"
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        required
      />

      <IconButton color="primary" type="submit" size={"small"}>
        <SendIcon />
      </IconButton>
    </form>
  );
};

export default SendMessage;
