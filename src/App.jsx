import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quizz from './components/Quizz/Quizz'
import Quiz from './components/quiz/Quiz'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>

      <div>
      <Quiz/>
      <Quizz/>
      </div>
   </>
  )
}

export default App
