import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';
import Error from './components/Error';


function App() {
  const [auth, setAuth] = useState({});
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem('login'));
    if(user){
      setAuth(user);
    }else{
      setAuth("");
    }
  }, [])
  console.log(auth);
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route  path="/"  element={<Signup auth={auth}/>} />
             <Route element={<ProtectedRoutes auth={auth}/>}> 
              <Route  path="/home"   element={<Home/>} />
              <Route path='*' element={<Error />} />
            </Route>  
          </Routes>
      </Router>
    </div>
  );
}

export default App;
