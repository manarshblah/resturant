import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Login from './component/login';
import './login.css';

function App() {
    return (
        <div style={{height:"100%"}} >
           <Router>
            <Routes>
                <Route path='/resturant' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                
            </Routes>
           </Router>
            
       </div>
    )
}

export default App;
