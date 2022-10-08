
import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
// import Header from './Components/HomePage/Header';
// import Home from './Components/HomePage/Home';
// import Cart from './Components/HomePage/Cart'
import './App.css';
import Homepage from './Components/Home/Homepage';
import Login from './Components/LogIn/Login';
import Signup from './Components/SignUp/Signup';


function App() {

 

  return (
    <> 
     {/* <Login/>
     <Signup/> */}
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/home" element={<Homepage />} />
        
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
