import "./Header.css"

function Header() {
  return (
    <div className="header">
        <div className="headertitle">
            <span className="headertitlesm">React & Node</span>
            <span className="headertitlelg">Blog</span>
            
        </div>
        <img className="headerimg" src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Header