import { useNavigate } from "react-router-dom";
import { useChat } from "../../context/ChatContext";
import { logout } from "../../lib/auth.service";

const ChatSidebar = () => {
  const navigate = useNavigate();
  const { clearChat } = useChat();

  const handleNewChat = () => {
    clearChat();
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col p-4">
      {/* Brand */}
      <div className="mb-8">
        <h1 className="text-red-700 font-extrabold text-2xl tracking-wide">
          HoryX
        </h1>
      </div>

      {/* Actions */}
      <div className="flex-1 space-y-3">
        <button
          onClick={handleNewChat}
          className="w-full text-left px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
        >
          + New Chat
        </button>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto text-left px-3 py-2 rounded-md text-red-500 hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default ChatSidebar;
