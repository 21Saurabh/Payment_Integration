import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import Registration from './component/Registration'
import Pay from './component/Pay'
import Logout from './component/Logout'
import Error from './component/Errorpage'

export default function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>

   <Route path='/login' element={<Login/>}/>

   <Route path='/registration' element={<Registration />}/>

   <Route path='/pay' element={<Pay/>}/>
   <Route path='/Logout' element={<Logout />}/>

    <Route path='*' element={<Error />}/>

   </Routes>
   </>
  )
}
