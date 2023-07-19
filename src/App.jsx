import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Login from './pages/login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
