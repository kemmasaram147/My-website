import {Link} from "react-router-dom";
import "./Register.css"

function Register() {
  return (
    <div className="register">
        <span className="registertitle">Register</span>
        <form className="registerform">
        <label >Username</label>
            <input type="text" className="registerinput" placeholder="Enter Your username...." />
            <label >Email</label>
            <input type="text" className="registerinput" placeholder="Enter Your Email...." />
            <label >Password</label>
            <input type="password" className="registerinput" placeholder="Enter Your Password...." />
         <button className="registerbutton">Register</button>
        </form>
        <button className="loginbutton">
        <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}

export default Register