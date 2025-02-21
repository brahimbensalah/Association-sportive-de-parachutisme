import React from "react";


import Footer from './components/footer.js'
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Classes from "./Pages/classes.js";
import Contact from "./Pages/contact.js";
import Testimonials from "./Pages/Testimonials.js";
import Login from './Pages/Login.js'
import Register from './Pages/Register.js'
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom'; 


let App = () => {
  

  return (
    <Router>
     <div>
     
      
      <Routes>
        <Route exact  path="/" element={<Home/>} >  </Route>
        <Route exact  path="/Login" element={<Login/>} >  </Route>
        <Route exact  path="/Register" element={<Register/>} >  </Route>
        <Route  path="/About" element={<About/>} >  </Route>
        <Route  path="/Classes" element={<Classes/>} >  </Route>
        <Route  path="/Contact" element={<Contact/>} >  </Route>
        <Route  path="/Testimonials" element={<Testimonials/>} >  </Route>
       

      </Routes>
      <Footer></Footer>
    </div>
   </Router>
  );
};

export default App;
