import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const ChatLayout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-950 text-gray-100">
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main Chat Area */}
      <ChatWindow />
    </div>
  );
};

export default ChatLayout;
