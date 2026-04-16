// =============================================================
//  main.jsx — React Entry Point
//
//  This is the very first file React loads.
//  It grabs the <div id="root"> from index.html and renders
//  our <App /> component inside it.
//
//  You generally won't need to edit this file.
// =============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Find the #root element in index.html and mount our React app into it.
createRoot(document.getElementById('root')).render(
  // StrictMode is a development helper — it highlights potential issues.
  // It has no effect in the production build.
  <StrictMode>
    <App />
  </StrictMode>
);
