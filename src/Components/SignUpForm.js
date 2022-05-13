import {React, useState} from 'react'
import {  BrowserRouter as Router,  Link } from "react-router-dom";


export default function SignUpForm() {

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");


  return (
<div className="App"> 
    <div className="appAside" />
    <div className="appForm">
        <div className='formCenter'>
            
            <form action="">
                <div className="formField">
                    <h3>Sign Up</h3>
                    <label className="formFieldLabel"  htmlFor="phone"> Create Account </label>
                    
                    <input className="formFieldInput" type="text" id="name" name="name" 
                        placeholder="Enter Your Name"
                        value={name}
                        onChange= { (e) => setName(e.target.value) }
                    />

                    <input className="formFieldInput" type="tel" id="phone" name="phone" 
                        autoComplete='off'
                        placeholder="Mobile Number"
                        value={phone}
                        onChange= { (e) => setPhone(e.target.value) }
                    />

                    <input className="formFieldInput" type="text" id="password" name="password" 
                        autoComplete='off'
                        placeholder="Password"
                        value={password}
                        onChange= { (e) => setPassword(e.target.value) }
                    />

                    <input className="formFieldInput" type="text" id="password" name="password" 
                        autoComplete='off'
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange= { (e) => setConfirmpassword(e.target.value) }
                    />
                </div>

                <div >
                    <button className='formFieldButton'  type="submit"> Sign up</button>
                
                </div>
            </form>

                <div className='button'>
                    <span>Already have an account?</span>
                    <Link to="/"  className='pageSwitcher' >
                    Sign in
                    </Link>
                </div>
            </div>
    </div>
</div>
  )
}
