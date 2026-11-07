import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { PrefsProvider } from './context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrefsProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </PrefsProvider>
  </StrictMode>
)
