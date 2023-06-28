import "./Settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

function Settings() {
  return (
    <div className="settings">
        <div className="settingwrapper">
            <div className="settingtitle">
                <span className="settingupdatatitle">Updata Your Account</span>
                <span className="settingdeletetitle">Delete Title</span>
            </div>
            <form className="settingform">
                <label> Profile Picture</label>
                <div className="settingpp">
                    <img className="settingppimg" src="https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <label htmlFor="fileinput">
                    <i className=" settingppicon fa-solid fa-users"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="suresh" />
                <label>Email</label>
                <input type="email" placeholder="suresh@gmail.com" />
                <label>Password</label>
                <input type="password"  />
                <button className="settingsubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings