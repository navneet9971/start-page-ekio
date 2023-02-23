import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./auth.scss";

function Login() {
  const [user, setUser] = useState()
  const nevigate = useNavigate()

  const submitData = (data) =>{
     nevigate('/signup')
  }

  const onSubmitData = (e) =>{console.log("first",e)
    if(e){
      setUser(true)
    }
  }

  return (
    <>
     {user && (
          <Navigate to="/dashboard" replace={true} />
        )}
      <div className="login">
        <div className="form">
          <div style={{ position: "relative" }}>
            <h2>ElKOMP</h2>
            <p className="efficient">efficient Compliances.</p>
          </div>
          <p>Don't you have account?</p>

          <button onClick={submitData}  style={{cursor:'pointer'}} id="singup" >Sing up</button>
          <h3>WELCOME</h3>
          <input
            type="email"
            name="email"
            className="box"
            placeholder="Username"
            value=""
          />
          <input
            type="email"
            name="email"
            className="boxx"
            placeholder="Password"
            value=""
          />
          <input style={{cursor:'pointer'}} type="submit" value="LOGIN" id="submit" onClick={()=>onSubmitData('data')} />
          <Link to="#">Forget Your Password?</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
