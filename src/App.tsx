import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Count } from './Components/Count/Count';

function App() {
  const [count, setCount] = useState(0)

  const aumentar = ()=>{
    
    setCount(count+1)
  }

  const disminuir = ()=>{
    count >0? setCount(count-1) : null;
  }
  return (
    <div className="App">
        <Count 
        text='Mi Contador'
        count={count}
        aumentar={aumentar}
        disminuir={disminuir}
        />
    </div>
  )
}

export default App
