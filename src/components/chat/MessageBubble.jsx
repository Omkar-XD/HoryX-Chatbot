import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[75%] rounded-lg px-4 py-3 text-sm leading-relaxed
          ${
            isUser
              ? "bg-red-600 text-white"
              : "bg-gray-800 text-gray-100"
          }`}
      >
        {/* COPY BUTTON (assistant only) */}
        {!isUser && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 text-xs text-gray-400 hover:text-white"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}

        {/* MESSAGE CONTENT */}
        <ReactMarkdown
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>;
            },
            code({ inline, className, children }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md my-3 text-sm"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="bg-black/40 px-1 py-0.5 rounded text-xs">
                  {children}
                </code>
              );
            },
            ul({ children }) {
              return <ul className="list-disc ml-5 mb-2">{children}</ul>;
            },
            ol({ children }) {
              return <ol className="list-decimal ml-5 mb-2">{children}</ol>;
            },
            li({ children }) {
              return <li className="mb-1">{children}</li>;
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MessageBubble;
