// ─── Entry Point ───────────────────────────────────────────────────────────
// Mounts the React app into #root (see index.html).

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
