import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './shared/Login';
import Registration from './shared/Registration';
import UserTypes from './shared/UserTypes';

export const UserContext = React.createContext('theme')

function App() {

  const [user, setUser] = useState([])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usertype/registration' element={<UserTypes />} />
      </Routes>
    </div>
  );
}

export default App;
