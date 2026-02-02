import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import SmoothScroll from './Components/Common/SmoothScroll'
import WebVitals from './Components/Common/WebVitals'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SmoothScroll>
        <App />
        <WebVitals />
      </SmoothScroll>
    </StrictMode>
  </BrowserRouter>
)
