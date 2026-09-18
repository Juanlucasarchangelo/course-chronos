import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App } from  './App';
import { WhatsButton } from './components/WhatsButton';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WhatsButton />
    <App />
  </StrictMode>,
)
