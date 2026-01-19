import { useNavigate } from "react-router-dom";
import { ChatProvider } from "../context/ChatContext";
import ChatLayout from "../components/chat/ChatLayout";

const Chat = () => {
  return (
    <ChatProvider>
      <ChatLayout />
    </ChatProvider>
  );
};

export default Chat;

