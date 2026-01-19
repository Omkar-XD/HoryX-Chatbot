import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import PromptInput from "./PromptInput";

const ChatWindow = () => {
  return (
    <section className="flex flex-col flex-1 h-full">
      {/* Header */}
      <ChatHeader />

      {/* Messages */}
      <MessageList />

      {/* Prompt Input */}
      <PromptInput />
    </section>
  );
};

export default ChatWindow;
