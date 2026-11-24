import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { captureAuthResult } from './features/horus-auth/presentation/authResult'

const authResult = captureAuthResult(window.location.href, (path) => {
  window.history.replaceState(window.history.state, '', path)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App authResult={authResult} />
  </StrictMode>,
)
