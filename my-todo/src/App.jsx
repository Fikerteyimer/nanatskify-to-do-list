import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import Features from './Pages/Features.jsx'
      
function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/features" element={<Features/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
   
 
    


    </>
  )
}

export default App

