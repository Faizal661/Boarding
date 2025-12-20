import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './pages/Timer.jsx'
import CounterProvider from './pages/Counter.jsx'
import { CustomHook } from './pages/useToggle.jsx'
import ForwardRef from './pages/ForwardRef.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Timer /> */}
    <CounterProvider />
    <CustomHook/>
    {/* <MenuBarOpen /> */}
    <ForwardRef/>
  </StrictMode>,
)
