// =============================================================
//  chatbot.js — Keyword Matching Logic
//
//  This file contains the function that decides which FAQ response
//  to send based on what the user typed.
//
//  HOW IT WORKS:
//  1. We receive the user's message as a string.
//  2. We convert it to lowercase so "Savings" and "savings" both match.
//  3. We loop through every FAQ entry in faqs.js.
//  4. For each entry, we check if any keyword appears in the message.
//  5. If we find a match, we return that FAQ's response immediately.
//  6. If nothing matches, we return a friendly "I didn't understand" message.
// =============================================================

import faqs from './data/faqs.js';

/**
 * getBotResponse
 *
 * @param {string} userMessage - The raw text the user typed in the chat box.
 * @returns {string} - The bot's response text.
 */
export function getBotResponse(userMessage) {
  // Step 1: Normalize the input — lowercase and trim extra whitespace.
  // This makes matching case-insensitive.
  const normalizedInput = userMessage.toLowerCase().trim();

  // Step 2: Handle empty input gracefully.
  if (!normalizedInput) {
    return "Please type a question and I'll do my best to help!";
  }

  // Step 3: Loop through each FAQ entry and check for keyword matches.
  for (const faq of faqs) {
    // Check each keyword in this FAQ entry.
    for (const keyword of faq.keywords) {
      if (normalizedInput.includes(keyword.toLowerCase())) {
        // Found a match! Return this entry's response.
        return faq.response;
      }
    }
  }

  // Step 4: No keywords matched — return a fallback message.
  // TIP: You can customize this message or add more keyword entries in faqs.js
  //      to reduce how often users see this fallback.
  return (
    "I'm not sure I understand that question. Here are some topics I can help with:\n\n" +
    "• Checking or savings accounts\n" +
    "• Credit cards\n" +
    "• Loans or mortgages\n" +
    "• How to open an account\n" +
    "• Fees, rates, or security\n" +
    "• Mobile app & online banking\n\n" +
    "Try asking about one of those, or type **'help'** to reach a human agent!"
  );
}

/**
 * getWelcomeMessage
 *
 * Returns the first message the bot sends when the chat loads.
 * Edit this string to change the greeting!
 *
 * @returns {string}
 */
export function getWelcomeMessage() {
  return (
    "👋 Hi there! I'm **Finn**, your FirstBank virtual assistant.\n\n" +
    "I can answer questions about:\n" +
    "• Checking & savings accounts\n" +
    "• Credit cards & loans\n" +
    "• How to open an account\n" +
    "• Rates, fees, and security\n\n" +
    "What can I help you with today?"
  );
}
