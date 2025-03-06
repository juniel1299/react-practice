import './App.css'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import History from './Components/History';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/history' element={<History/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
