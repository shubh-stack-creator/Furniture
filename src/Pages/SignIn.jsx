import React, { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

const SignIn = () => {

    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')

    let userdata = useSelector((state) => state.userreducer)

    const handleSubmit = (e) => {
        e.preventDefault();
        const signindata = {email : email,password:pwd}
        console.log(signindata)
        if(userdata.data.email == signindata.email && userdata.data.password == signindata.password){
            var myFunction = function(){
                navigate("/checkout");
            };
            toast("Signin Successful ! Loading...");
            setTimeout(myFunction, 3000);
        }
        else{
            toast("Invalid Credentials ! Try Again");
        }
    }
    return (
        <>
        
            <Navbar />
        <div className='SignIn' style={{margin:"0 10vw",paddingTop:"10vh",color:"white",paddingBottom:"100%"}}>
            <div className="container">

                <form style={{paddingTop:"10vh"}}>
                    <h1>Sign In</h1>
                    <div class="mb-3" style={{paddingTop:"5vh"}}>
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={pwd} onChange={e => setPwd(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <Toaster />
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn