import React from 'react'
import SignInForm from "./Components/SignInForm.js"
import SignUpForm from "./Components/SignUpForm.js"
import './App.css';

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    withRouter
  } from "react-router-dom";
import Otp from './Components/Otp.js';

function App() {
  return (
    <>
      
      {/* <div className="App">  */}
          {/* <div className="appAside" />
          <div className="appForm"> */}
                <Router>
                 <Switch>
                   <Route  exact path="/" >
                          <SignInForm />
                   </Route>
                    <Route path='/SignUpForm'  >
                        <SignUpForm />
                   </Route>
                   <Route path='/Otp'>
                        <Otp />
                   </Route>
                  </Switch>
                </Router>
            {/* </div> */}
        {/* </div> */}
       

     </>
  );
}

export default App;
