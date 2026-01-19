// src/lib/groq.service.js

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

/**
 * Change model here safely
 * Examples:
 * - "llama-3.1-8b-instant"
 * - "llama-3.3-70b-versatile"
 * - "openai/gpt-oss-120b"
 */
const MODEL = "openai/gpt-oss-120b";

export async function sendMessageToGroq(messages) {
  if (!GROQ_API_KEY) {
    throw new Error("Groq API key is missing");
  }

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,

      // 🔴 SYSTEM PROMPT IS MANDATORY FOR GPT-OSS MODELS
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant. Respond clearly, well-structured, and properly formatted. Use markdown and code blocks where appropriate.",
        },
        ...messages,
      ],

      temperature: 0.7,
    }),
  });

  // 🚨 Handle HTTP errors
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Groq HTTP Error:", errorText);
    throw new Error("Groq request failed");
  }

  const data = await response.json();

  // 🛡️ Defensive parsing (THIS WAS YOUR BUG)
  const content = data?.choices?.[0]?.message?.content;

  if (!content || typeof content !== "string") {
    console.error("Groq returned empty content:", data);
    throw new Error("Model returned no content");
  }

  return content;
}
