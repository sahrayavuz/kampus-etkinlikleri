import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('Sunucudan cevap bekleniyor...')

  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then((response) => {
        setMessage(response.data.message)
      })
      .catch(() => {
        setMessage('Sunucuya bağlanılamadı.')
      })
  }, [])
return (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <h1>Web Tasarım Projem</h1>

            <p>Backend bağlantısı:</p>

            <div className="server-message">
              <h2>{message}</h2>
            </div>
          </div>
        }
      />
    </Routes>
  </BrowserRouter>
)
  

  
}

export default App