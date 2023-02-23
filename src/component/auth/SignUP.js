import React from "react";
import { useNavigate } from "react-router-dom";

function SignUP() {
  const nevigate = useNavigate()

  const submitData = (data) =>{
     nevigate('/dashboard')
  }
  return (
    <div class="container_signup">
      <div class="form_signup">
        <div class="form-group">
          <input type="text" placeholder="First Name" class="form-control" />
          <input type="text" placeholder="Last Name" class="form-control" />
        </div>
        <div class="form-wrapper">
          <input type="text" placeholder="UserName" class="form-control" />
        </div>
        <div class="form-wrapper">
          <input type="text" placeholder="Email" class="form-control" />
        </div>
        <div class="form-wrapper">
          <input type="text" placeholder="Phone Number" class="form-control" />
        </div>
        <div class="form-wrapper">
          <input
            type="text"
            placeholder="choose Your Package"
            class="form-control"
          />
        </div>
        <button onClick={submitData} className="button">REGISTER NOW</button>
      </div>
      <div class="small">
        <h2>ElKOMP</h2>
        <p className="p_signup">Efficient Compliances.</p>
      </div>
    </div>
  );
}

export default SignUP;
