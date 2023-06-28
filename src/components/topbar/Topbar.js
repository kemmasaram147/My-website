import {Link} from "react-router-dom";
import "./Topbar.css"

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
      <i className="topicon fa-brands fa-facebook"></i>
      <i className="topicon fa-brands fa-instagram"></i>
      <i className="topicon fa-brands fa-twitter"></i>
      <i className="topicon fa-brands fa-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
          <Link className="link" to="/">HOME</Link>
          </li>
          <li className="toplistitem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="toplistitem"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="toplistitem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="toplistitem"><Link className="link" to="/settings">SETTINGS</Link></li>
          <li className="toplistitem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topright">
        {
          user ? (

            <img className="topimg" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />

            
          ) : (
            <ul className="toplist">
              <li className="toplistitem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="toplistitem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )
        }
        
        <i className=" topsearchicon fa-brands fa-searchengin"></i>
      </div>
    </div>
  )
}

export default Topbar