import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import History from'./pages/History'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Header/>
    <Routes>
      {/* http://localhost:5173/ */}
      <Route path='/' element={<Landing/>} />

      <Route path='/home' element={<Home/>} />
      <Route path='/history' element={<History/>} />
      

    </Routes>
    <Footer/>
    </>
  )
}

export default App
