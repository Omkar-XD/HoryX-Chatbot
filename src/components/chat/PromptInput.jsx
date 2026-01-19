import { useState } from "react";
import { useChat } from "../../context/ChatContext";

const PromptInput = () => {
  const { sendMessage, loading } = useChat();
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    await sendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-800 p-4 bg-gray-900 flex gap-2">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Send a message..."
        disabled={loading}
        rows={1}
        className="flex-1 resize-none rounded-md bg-gray-800 text-gray-100 p-3 focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
};

export default PromptInput;
