// import logo from './logo.svg';n
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";
// import Num from "./components/Num";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [btntext, setbtntext] = useState('Enable darkmode')
  const [alert, setalert] = useState(null)

  const showalert = (message , type)=>{
    setalert({
    msg:message,
    type : type
  });

  setTimeout(() => {
    setalert(null)
  }, 1500);

  }

  
  
  const toggleMode = ()=>{
    
    if(mode === 'dark'){
      setmode('light')
      setbtntext('Enable darkmode')
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled" , "success")
    }
    else{
      setmode('dark')
      setbtntext('Enable lightmode')
      document.body.style.backgroundColor = 'grey';
      showalert("dark mode has been enabled" , "success")
    }
  }

  return (
    <>
     {/* <Router> */}
     <Navbar title = "amith" home = "home" Link = "About" mode={mode} toggleMode ={toggleMode} btntext ={btntext}/>
     <Alert  alert = {alert}/>
     <div className="container my-3" >
     {/* <Switch> */}
          {/* <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/"> */}
     <TextForm  heading = "Enter the Text to analyze" mode ={mode} showalert = {showalert}/>
          {/* </Route>
        </Switch> */}
     </div> 
     {/* </Router> */}


 
      </>
  );
}

export default App;
