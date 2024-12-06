
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Contacts from './Pages/Contacts'
import { Login } from './Pages/Login'
import Register from './Components/register'
import { Profil } from './Components/Profil'
import { useEffect, useState } from 'react'
import { auth } from './Components/firebase/firebase'
import EspacesMembers from './Pages/EsMembers'






function App() {

  const [user, setUser] = useState();

  useEffect (() => {
    auth.onAuthStateChanged ((user) => {
      setUser(user)
    })
  })
  

  return (
    <> 
     
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/Login' element= {user ? <Navigate to='/profile'/> : <Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profil/>}/>
          <Route path='/membres' element={<EspacesMembers/>}/>
          


      </Routes>

        

      
    </>
  )
}

export default App
