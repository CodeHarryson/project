// =============================================================
//  faqs.js — The heart of the chatbot!
//
//  This file defines ALL of the bot's questions and answers.
//
//  HOW TO ADD A NEW RESPONSE:
//  1. Copy one of the objects below (the { keywords, response } blocks).
//  2. Paste it at the end of the array (before the closing "]").
//  3. Add a comma after the previous entry.
//  4. Edit the keywords array — these are the words the bot looks for
//     in the user's message (case-insensitive).
//  5. Edit the response string — this is what the bot will say.
//  Save the file and the chatbot will immediately use your new entry!
// =============================================================

const faqs = [
  // ── CHECKING ACCOUNTS ────────────────────────────────────────
  {
    keywords: ["checking", "check account", "debit", "everyday account", "current account"],
    response:
      "Our **FirstBank Checking Account** is perfect for everyday spending! " +
      "You get a free Visa debit card, access to 50,000+ ATMs with no fees, " +
      "and a mobile app to manage your money 24/7. " +
      "There's no monthly fee when you set up a direct deposit of $500 or more. " +
      "Would you like to know how to open one?",
  },

  // ── SAVINGS ACCOUNTS ─────────────────────────────────────────
  {
    keywords: ["savings", "save money", "high yield", "interest account", "saving"],
    response:
      "Our **FirstBank Savings Account** helps your money grow! " +
      "We offer a 4.75% APY on our High-Yield Savings Account — " +
      "one of the best rates available. There's no minimum balance required " +
      "and no monthly fees. Deposits are FDIC-insured up to $250,000. " +
      "Want to hear more about our savings options?",
  },

  // ── CREDIT CARDS ─────────────────────────────────────────────
  {
    keywords: ["credit card", "credit", "rewards card", "cashback", "cash back", "points"],
    response:
      "We have three great **credit cards** to choose from:\n\n" +
      "• **Everyday Rewards** — 2% cash back on all purchases, no annual fee.\n" +
      "• **Travel Plus** — 3x points on travel & dining, $95 annual fee.\n" +
      "• **Secured Card** — great for building credit, $200 minimum deposit.\n\n" +
      "All cards come with fraud protection and zero liability. " +
      "Which one sounds right for you?",
  },

  // ── PERSONAL LOANS ───────────────────────────────────────────
  {
    keywords: ["loan", "personal loan", "borrow", "borrowing", "financing"],
    response:
      "Our **Personal Loans** offer fixed rates starting at 7.99% APR. " +
      "You can borrow between $1,000 and $50,000 with repayment terms " +
      "of 12–60 months. Funds are deposited as soon as the next business day " +
      "after approval. There are no prepayment penalties — pay it off early and save! " +
      "Would you like to check your rate with no impact to your credit score?",
  },

  // ── MORTGAGES / HOME LOANS ───────────────────────────────────
  {
    keywords: ["mortgage", "home loan", "house", "property", "refinance", "refi"],
    response:
      "FirstBank offers several **mortgage options**:\n\n" +
      "• **30-Year Fixed** — stable payments, currently at 6.85% APR.\n" +
      "• **15-Year Fixed** — pay off faster with a lower rate (6.20% APR).\n" +
      "• **FHA Loans** — low down payment options for first-time buyers.\n\n" +
      "Our mortgage specialists can guide you through every step. " +
      "Would you like to get pre-qualified today?",
  },

  // ── HOW TO OPEN AN ACCOUNT ───────────────────────────────────
  {
    keywords: ["open account", "open an account", "sign up", "get started", "apply", "new account", "create account", "join"],
    response:
      "Opening an account is quick and easy — it takes about **5 minutes** online!\n\n" +
      "Here's what you'll need:\n" +
      "1. A valid government-issued ID (driver's license or passport).\n" +
      "2. Your Social Security Number (SSN).\n" +
      "3. An initial deposit (as low as $0 for checking).\n\n" +
      "Visit **firstbank.com/open** or stop by any of our 200+ branches. " +
      "Can I help you choose the right account type?",
  },

  // ── ONLINE & MOBILE BANKING ──────────────────────────────────
  {
    keywords: ["online banking", "mobile app", "app", "mobile banking", "digital", "online access", "transfer"],
    response:
      "Our **FirstBank Mobile App** (iOS & Android) lets you:\n\n" +
      "• Check balances and transaction history.\n" +
      "• Transfer money between accounts instantly.\n" +
      "• Deposit checks by taking a photo.\n" +
      "• Pay bills and send money with Zelle®.\n" +
      "• Set up account alerts and freeze your card if it's lost.\n\n" +
      "Rated 4.8★ on the App Store. Download it free — just search 'FirstBank'.",
  },

  // ── FEES & ATMs ──────────────────────────────────────────────
  {
    keywords: ["fee", "fees", "atm", "atm fee", "charge", "monthly fee", "cost"],
    response:
      "We believe in **transparent, low fees**:\n\n" +
      "• No monthly fee on checking with a $500+ direct deposit.\n" +
      "• Free access to 50,000+ Allpoint ATMs nationwide.\n" +
      "• $0 foreign transaction fees on Travel Plus credit card.\n" +
      "• Overdraft protection available — link a savings account.\n\n" +
      "For a full fee schedule, visit **firstbank.com/fees**.",
  },

  // ── INTEREST RATES ───────────────────────────────────────────
  {
    keywords: ["interest rate", "apy", "apr", "rate", "rates", "yield"],
    response:
      "Here are our current rates (as of today):\n\n" +
      "• **High-Yield Savings** — 4.75% APY\n" +
      "• **Money Market** — 4.50% APY\n" +
      "• **12-Month CD** — 5.10% APY\n" +
      "• **Personal Loan** — from 7.99% APR\n" +
      "• **30-Year Mortgage** — 6.85% APR\n\n" +
      "Rates may vary based on creditworthiness. Want details on any of these?",
  },

  // ── CUSTOMER SUPPORT ─────────────────────────────────────────
  {
    keywords: ["help", "support", "contact", "phone", "speak", "human", "agent", "representative", "talk to someone"],
    response:
      "I'm happy to connect you with our team! Here's how to reach us:\n\n" +
      "• **Phone:** 1-800-FIRST-BK (available 24/7)\n" +
      "• **Live Chat:** firstbank.com → click 'Chat Now'\n" +
      "• **Email:** support@firstbank.com (reply within 24 hrs)\n" +
      "• **Branch Locator:** firstbank.com/locations\n\n" +
      "Is there anything else I can answer for you right now?",
  },

  // ── SECURITY / FRAUD ─────────────────────────────────────────
  {
    keywords: ["security", "fraud", "scam", "stolen", "unauthorized", "identity theft", "safe", "protect"],
    response:
      "Your security is our top priority! Here's how we protect you:\n\n" +
      "• **Zero Liability** — you're never responsible for unauthorized charges.\n" +
      "• **2-Factor Authentication** on all online banking logins.\n" +
      "• **Real-time fraud alerts** via text or email.\n" +
      "• **Card freeze** — instantly lock your card in the app if it's lost.\n\n" +
      "Spotted suspicious activity? Call us immediately at 1-800-FIRST-BK.",
  },

  // ── CD (CERTIFICATE OF DEPOSIT) ──────────────────────────────
  {
    keywords: ["cd", "certificate of deposit", "term deposit", "fixed term"],
    response:
      "Our **Certificates of Deposit (CDs)** offer guaranteed returns:\n\n" +
      "• 6-Month CD — 4.85% APY\n" +
      "• 12-Month CD — 5.10% APY\n" +
      "• 24-Month CD — 4.95% APY\n" +
      "• 36-Month CD — 4.80% APY\n\n" +
      "Minimum deposit is just $500. Your rate is locked in for the full term — " +
      "no market risk. FDIC-insured. Want to open one?",
  },
];

export default faqs;
