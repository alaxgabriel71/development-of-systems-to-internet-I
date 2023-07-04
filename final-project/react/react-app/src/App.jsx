import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChartsPage from './pages/ChartsPage';
import HomePage from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import SignIn from './pages/SignIn';

function App() {
  const [socket, setSocket] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login socket={socket} setSocket={sock => setSocket(sock)} />} />
          <Route path="/home" element={<HomePage socket={socket} setSocket={sock => setSocket(sock)} />} />
          <Route path="/questions" element={<QuestionsPage socket={socket} />} />
          <Route path="/charts" element={<ChartsPage socket={socket} />} />
          <Route path="/signin" element={<SignIn setSocket={sock => setSocket(sock)} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
