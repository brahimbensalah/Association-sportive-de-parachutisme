import React from 'react'
import Navbarre from '../components/Navbarre.js'

function Login() {
  return (
    <>
<Navbarre></Navbarre>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="container">
<form  >
  <div className="form-group">
    
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Email"
      name="email"

    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>
<br></br>

  <div className="form-group">
   
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      name="Password"

    />
<br></br>

  </div>

  <button type="submit" className="btn btn-primary">
    Log in
  </button>
</form>




<br></br>
<br></br>
<br></br>



</div>




      
    </>
  )
}

export default Login
