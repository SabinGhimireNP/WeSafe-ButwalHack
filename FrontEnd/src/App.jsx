import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn/SignIn'
import "./assets/Style/App.css"
import Stories from './Components/Stories/Stories'

function App() {

  return (
    <>
    <Router>
        <NavBar />
          <div className='Container'>
        <Routes >
          <Route path="/" element={<>heroLander</>} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/signin" element={<SignIn /> }/>
        </Routes>

          </div>
    </Router>
    </>
  )
}

export default App
