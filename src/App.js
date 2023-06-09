// import logo from './logo.svg';

import Navbar from './Components/Navbar';
import Main from './Components/Main';
// import './App.css';
// import About from './Components/About';
import React, { useState } from "react";
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode , setMode] = useState(`light`);
  const [alert , setAlert] = useState(null);


  const showAlert =( message , type )=>{
    setAlert({
        msg : message,
        type : type,
      })
    setTimeout(() => {
      setAlert (null)
  }, 1500);
  }

  const toogleMode =()=>{
    if(mode === `light`){
      setMode(`dark`);
      document.body.style.backgroundColor = '#043460'
      showAlert("Dark Mode is Enable" , "success")
      document.title = "TextUtlity - Dark Mode"
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor = 'white'
      showAlert("light Mode is Enable" , "success")
      document.title = "TextUtlity - Light Mode"
    }
  }
  return (  
   <> 
 {/* <Router> */}
    <Navbar title ="TextUtils" about ="About Me"  mode={mode} toogleMode={toogleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
        {/* <Switch> */}
              {/* <Route path="/about">
                <About />
              </Route>
              <Route path="/"> */}
              <Main showAlert={showAlert} heading = "Enter The Some text Blow" mode={mode} />  
              {/* </Route> */}
      {/* </Switch> */}
    </div>
{/* </Router> */}
   </>
  );
}

export default App;
