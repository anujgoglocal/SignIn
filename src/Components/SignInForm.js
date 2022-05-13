import {React, useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import { BrowserRouter as Router,  Link} from "react-router-dom";


export default function SignInForm() {
    const [phone, setPhone] = useState("");
    const [password, setPassword ] = useState("");

    const responseGoogle = (response) => {
        console.log(response);
      }

      const clientId = "775185895865-79g2kp5ss0dtb30ikuh56lhkr4vl1rjj.apps.googleusercontent.com";
  return (
<div className="App"> 
    <div className="appAside" />
    <div className="appForm">
        <div className='formCenter'>
            
            <form action="">
                <div className="formField">
                    <h3>Sign in</h3>
                    <label className="formFieldLabel"  htmlFor="phone"> Mobile </label>
            
                    <input className="formFieldInput" type="tel" id="phone" name="phone" 
                        placeholder="Enter Your Number"
                        value={phone}
                        onChange= { (e) => setPhone(e.target.value) }
                    />

                    <input className="formFieldInput" type="text" id="password" name="password" 
                        autoComplete='off'
                        placeholder="Password"
                        value={password}
                        onChange= { (e) => setPassword(e.target.value) }
                    />
                </div>

                <div className="or"> Or </div>
                <div >
                    <GoogleLogin
                        className='sign-in'
                        clientId={clientId}
                        buttonText="      Sign in with Google  "
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                />
                </div>
                <div >
                    <button className='formFieldButton'  type="submit"> Sign in</button>

                </div>

            </form>

            <div className='button'>
                    <span>Don't have an account?</span>
                    <Link to="/SignUpForm"  className='pageSwitcher' >
                    Sign up
                    </Link>
            </div>
        </div>
        </div>
</div>
  )
}
