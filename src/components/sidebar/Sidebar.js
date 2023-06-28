import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img className="sidebarimg" src="https://images.pexels.com/photos/1130625/pexels-photo-1130625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p className="sidebarp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente provident, quibusdam obcaecati soluta perferendis est similique dolorem ex quisquam.

            </p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">Life</li>
                <li className="sidebarlistitem">Music</li>
                <li className="sidebarlistitem">Style</li>
                <li className="sidebarlistitem">Sport</li>
                <li className="sidebarlistitem">Tech</li>
                <li className="sidebarlistitem">Cinema</li>
            </ul>
        </div>   
        <div className="siderbaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-facebook"></i>
            <i className="sidebaricon fa-brands fa-instagram"></i>
            <i className="sidebaricon fa-brands fa-twitter"></i>
            <i className="sidebaricon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar