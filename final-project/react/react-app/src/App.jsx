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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login socket={socket} setSocket={sock => setSocket(sock)} />} /> */}
          <Route path="/início" element={<HomePage socket={socket} setSocket={sock => setSocket(sock)} name={name} email={email} />} />
          <Route path="/formulário" element={<QuestionsPage name={name} email={email} />} />
          <Route path="/gráficos" element={<ChartsPage socket={socket} name={name} email={email} />} />
          <Route path="/" element={<SignIn setSocket={sock => setSocket(sock)} name={name} email={email} setName={name => setName(name)} setEmail={email => setEmail(email)}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
