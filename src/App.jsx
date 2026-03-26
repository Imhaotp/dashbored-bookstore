import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
//import './App.css';
import DashBoredLayouts from './layouts/DashboredLayouts';
import { BrowserRouter, Router, Route, Navigate, Routes }
  from 'react-router-dom';
import Login from './Pages/login';

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to = "/Login" />}
        />
        
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        
        <Route path='/dashbored' element={IsLoggedIn ? <DashBoredLayouts /> : <Navigate to="/Login" />}
        />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App
