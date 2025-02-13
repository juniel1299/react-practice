import { useRef, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Profile from './components/Profile'
function App() {

  const [count, setCount] = useState(1);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const clickRef = useRef(0);


  return (
    <div>
      <Input onClickButton={onClickButton}/>
    </div>
  )
}

export default App
