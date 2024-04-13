
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from './components/LoginPage'
import VotingPage from './components/VotingPage'
import AdminPage from './components/AdminPage'
import AddPartyPage from './components/AddPartyPage'
import ResultPage from './components/ResultPage'
import HomePage from './components/HomePage'
function App() {
  


  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/VoterSignup' element={<SignupPage/>} />
      <Route path='/VoterLogin' element={<LoginPage/>} />
      <Route path='/VotingPage' element={<VotingPage/>} />
      <Route path='/AdminPage' element={<AdminPage/>} />
      <Route path='/AddPartyPage' element={<AddPartyPage/>} />
      <Route path='/ResultPage' element={<ResultPage/>} />
      <Route path='/' element={<HomePage/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
