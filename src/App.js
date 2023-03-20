import React from 'react'
import LandingPage from './LandingPage';
import Login from './components/Login'
import Register from './components/Register'
import {Routes, Route} from 'react-router-dom';
import RMPoster from './components/RMPoster'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/posterdesain' element={<RMPoster />} />
      </Routes>
      
    </div>
  );
}

export default App;
