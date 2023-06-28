import "./Post.css"

function Post() {
  return (
    <div className="post">
        <img className="postimg" src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="postinfo">
            <div className="postcats">
                <span className="postcat">Music</span>
                <span className="postcat">Life</span>
            </div>
            <span className="posttitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postdata">1 hour ago</span>
        </div>
        <p className="postdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iusto doloribus 
        vero consequuntur necessitatibus dolore impedit cumque fuga consequatur quod obcaecati inventore, 
        neque ipsum id quo fugit quasi atque mollitia!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iusto doloribus 
        vero consequuntur necessitatibus dolore impedit cumque fuga consequatur quod obcaecati inventore, 
        neque ipsum id quo fugit quasi atque mollitia!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iusto doloribus 
        vero consequuntur necessitatibus dolore impedit cumque fuga consequatur quod obcaecati inventore, 
        neque ipsum id quo fugit quasi atque mollitia!
        </p>

    </div>
  )
}

export default Post