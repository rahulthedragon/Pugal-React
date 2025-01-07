import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './componends/HOME';
import About  from './componends/About';
import Contact from './componends/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <About Summary1="this is summary 1" Testimonial1="good from pugal"/>
      <Contact/>

    </div>
  )
}

export default App
