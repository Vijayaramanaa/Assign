import './App.css'
import Login from './Components/login/Login'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import Profile from './Components/profile/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
      <div>
        <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='home' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
