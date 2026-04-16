# BMEN-Finance-AI

A beginner-friendly banking FAQ chatbot built with **React + Vite**.  
No backend, no API keys — all responses run entirely in the browser.

---

## What It Does

- Clean chat UI that lets users type questions and get instant answers
- 12 pre-written FAQ responses covering checking, savings, credit cards, loans, mortgages, rates, fees, security, and more
- Animated typing indicator and quick-reply suggestion chips
- Keyword-matching logic — no AI or external services required

---

## Getting Started (under 5 minutes)

### 1. Prerequisites

Make sure you have **Node.js** installed (version 18 or newer).  
Check by running:
```bash
node --version
```
If you don't have it, download it from [nodejs.org](https://nodejs.org).

---

### 2. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/BMEN-Finance-AI.git
cd BMEN-Finance-AI
```

---

### 3. Install Dependencies

```bash
npm install
```

This downloads React, Vite, and all other packages listed in `package.json`.  
It only takes a few seconds.

---

### 4. Run the App

```bash
npm start
```

Then open your browser and go to **http://localhost:5173**  
You should see the chatbot! Try typing "Tell me about savings accounts".

---

## Project Structure

```
BMEN-Finance-AI/
├── index.html              ← The HTML page that loads React
├── vite.config.js          ← Vite configuration (you won't need to edit this)
├── package.json            ← Project metadata and npm scripts
│
└── src/
    ├── main.jsx            ← React entry point (mounts the app)
    ├── App.jsx             ← Main component — all the chat UI logic
    ├── App.css             ← All styles — edit to change colors/layout
    ├── chatbot.js          ← Keyword matching logic + welcome message
    │
    └── data/
        └── faqs.js         ← ⭐ ALL chatbot Q&A pairs live here!
```

---

## How to Edit the Chatbot Responses

Open `src/data/faqs.js`. You'll see entries like this:

```js
{
  keywords: ["checking", "debit", "current account"],
  response: "Our FirstBank Checking Account gives you a free Visa debit card...",
},
```

### Change an existing response
Find the entry and edit the `response` string. Save the file.  
The browser will auto-refresh (no restart needed).

### Add a brand new FAQ
Copy and paste one of the existing blocks, then edit the `keywords` and `response`:

```js
// Add this at the end of the array, before the closing ]
{
  keywords: ["wire transfer", "wire", "international transfer"],
  response: "We support domestic and international wire transfers. Domestic wires cost $20 and arrive the same day. International wires cost $35 and take 1–3 business days.",
},
```

That's it! The bot will immediately start matching those keywords.

---

## How Keyword Matching Works

The matching logic is in `src/chatbot.js`:

1. The user's message is converted to **lowercase**.
2. The bot loops through each FAQ entry in `faqs.js`.
3. If **any** keyword from the entry appears in the user's message, that response is returned.
4. If nothing matches, a fallback message is shown.

This is intentionally simple — a great place to experiment!  
**Challenge ideas:**
- Add fuzzy matching (so "savngs" still matches "savings")
- Rank results by how many keywords match
- Add a "Did you mean…?" suggestion

---

## Customization Guide

| What to change | Where to look |
|---|---|
| Bot's name or greeting | `src/chatbot.js` → `getWelcomeMessage()` |
| Quick-reply chip labels | `src/App.jsx` → `QUICK_REPLIES` array |
| Color scheme | `src/App.css` → CSS variables at the top |
| Bank name & logo | `src/App.jsx` → the `bank-header` section |
| Add more Q&A pairs | `src/data/faqs.js` |
| Typing delay timing | `src/App.jsx` → the `delay` variable in `handleSend` |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI components and state management |
| [Vite](https://vitejs.dev) | Dev server and build tool |
| Plain CSS | Styling (no external UI library) |
| Vanilla JS | Keyword matching logic |

---

## License

MIT — free to use, modify, and share.
