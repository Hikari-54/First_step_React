import './App.css'
import MainPage from './pages/MainPage'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
