import {Link} from "react-router-dom";
import "./Login.css"

function Login() {
  return (
    <div className="login">
        <span className="logintitle">Login</span>
        <form className="loginform">
            <label >Email</label>
            <input type="text" className="logininput" placeholder="Enter Your Email...." />
            <label >Password</label>
            <input type="password" className="logininput" placeholder="Enter Your Password...." />
        <button className="loginbuttons">Login</button>
        </form>
        <button className="registerbuttons">
        <Link className="link" to="/register">register</Link>
        </button>
    </div>
  )
}

export default Login