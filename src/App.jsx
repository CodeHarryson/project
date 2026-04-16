// =============================================================
//  App.jsx — Main React Component
//
//  This is the core of the chatbot UI. It manages:
//    - The list of messages displayed in the chat window
//    - Sending user messages and generating bot replies
//    - The "typing..." animation that appears before bot responds
//    - Quick-reply suggestion buttons for common questions
//
//  If you're new to React, the key things to notice are:
//    - useState: stores data that can change (like the message list)
//    - useEffect: runs code when something changes (e.g., auto-scroll)
//    - JSX: the HTML-like syntax returned at the bottom of the component
// =============================================================

import { useState, useEffect, useRef } from 'react';
import './App.css';
import { getBotResponse, getWelcomeMessage } from './chatbot.js';

// ── QUICK REPLY SUGGESTIONS ──────────────────────────────────
// These chips appear after the welcome message.
// Edit this array to change the suggested questions.
const QUICK_REPLIES = [
  "Tell me about checking accounts",
  "What savings options do you have?",
  "Do you offer credit cards?",
  "How do I open an account?",
  "What are your current rates?",
];

// ── SIMPLE MARKDOWN RENDERER ─────────────────────────────────
// The bot responses use **bold** markers and bullet points.
// This function converts them to real HTML so they look nice.
function renderMarkdown(text) {
  // Replace **bold** with <strong> tags
  const withBold = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return { __html: withBold };
}

// ── APP COMPONENT ────────────────────────────────────────────
export default function App() {

  // 'messages' is the array of chat bubbles shown on screen.
  // Each message is an object: { id, sender: 'bot'|'user', text }
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: getWelcomeMessage(), // The greeting defined in chatbot.js
    },
  ]);

  // 'inputValue' tracks what the user is typing in the text box.
  const [inputValue, setInputValue] = useState('');

  // 'isTyping' controls whether the animated "..." indicator shows.
  const [isTyping, setIsTyping] = useState(false);

  // 'showQuickReplies' hides the suggestion chips after the first user message.
  const [showQuickReplies, setShowQuickReplies] = useState(true);

  // 'messageEndRef' is a hidden element at the bottom of the message list.
  // We scroll to it whenever a new message is added.
  const messageEndRef = useRef(null);

  // Auto-scroll to the latest message whenever 'messages' or 'isTyping' changes.
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // ── SEND MESSAGE HANDLER ────────────────────────────────────
  // Called when the user clicks Send or presses Enter.
  function handleSend(text) {
    const trimmed = (text || inputValue).trim();
    if (!trimmed) return; // Don't send empty messages

    // 1. Add the user's message to the chat.
    const userMessage = {
      id: Date.now(),          // Use timestamp as a unique ID
      sender: 'user',
      text: trimmed,
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');          // Clear the input box
    setShowQuickReplies(false); // Hide quick replies after first interaction
    setIsTyping(true);          // Show the typing indicator

    // 2. After a short delay, add the bot's response.
    //    The delay (600–900ms) makes it feel more natural.
    const delay = 600 + Math.random() * 300;
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getBotResponse(trimmed), // ← This is where the magic happens!
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botReply]);
    }, delay);
  }

  // ── KEYBOARD HANDLER ───────────────────────────────────────
  // Submit on Enter key; allow Shift+Enter for a new line.
  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // ── RENDER ─────────────────────────────────────────────────
  return (
    <div className="app-wrapper">

      {/* Bank name header above the chat window */}
      <div className="bank-header">
        <span className="bank-logo">🏦</span>
        <div>
          <h1>FirstBank</h1>
          <p>Virtual Banking Assistant</p>
        </div>
      </div>

      {/* Main chat card */}
      <div className="chat-container">

        {/* Top bar with bot avatar and status */}
        <div className="chat-header">
          <div className="bot-avatar">🤖</div>
          <div className="bot-info">
            <h2>Finn — FirstBank Assistant</h2>
            <span className="status">
              <span className="status-dot" />
              Online · Typically replies instantly
            </span>
          </div>
        </div>

        {/* Scrollable message area */}
        <div className="message-list">

          {/* Render each message bubble */}
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`}>

              {/* Show a small avatar icon next to bot messages */}
              {msg.sender === 'bot' && (
                <div className="message-avatar">🤖</div>
              )}

              {/* The bubble — dangerouslySetInnerHTML renders our bold markdown */}
              <div
                className="message-bubble"
                dangerouslySetInnerHTML={renderMarkdown(msg.text)}
              />
            </div>
          ))}

          {/* Quick reply chips — shown only after the welcome message */}
          {showQuickReplies && !isTyping && (
            <div className="quick-replies">
              {QUICK_REPLIES.map(q => (
                <button
                  key={q}
                  className="quick-reply-btn"
                  onClick={() => handleSend(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Animated typing indicator */}
          {isTyping && (
            <div className="typing-indicator">
              <div className="message-avatar">🤖</div>
              <div className="typing-bubble">
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Invisible element to scroll into view */}
          <div ref={messageEndRef} />
        </div>

        {/* Input row at the bottom */}
        <div className="chat-input-row">
          <textarea
            className="chat-input"
            placeholder="Ask me about accounts, loans, credit cards…"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={isTyping} // Prevent sending while bot is "typing"
          />
          <button
            className="send-btn"
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            aria-label="Send message"
          >
            {/* Paper-plane send icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Small disclaimer at the very bottom */}
      <p className="chat-footer">
        FirstBank demo chatbot · Not real financial advice · For educational purposes only
      </p>

    </div>
  );
}
