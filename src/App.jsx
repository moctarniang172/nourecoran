import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './in'
import Accueil from './pages/public/Accueil'
import AppRoputes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)
  return <AppRoputes />
}

export default App
