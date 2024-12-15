import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import Register from './register'
import Login from './login'
import InitialTest from './InitialTest'
import Test from './test' 
function App() {
  return (
    <div style={{overflow:"hidden"}}>
    <div className="nav">
      <a href="/">HOME</a>
      <a href="/register">REGISTER</a>
      <a href="/login">LOGIN</a>
      <a href="/profile">PROFILE</a>
      <a href="/initial-test">INITIAL-TEST</a>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/initial-test" element={<InitialTest/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </div>
  )
}
export default App;