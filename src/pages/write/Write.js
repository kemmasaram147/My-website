import "./Write.css"

function Write() {
  return (
    <div className="write">
        <img className="writeimg" src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        
        <from className="writeform">
            <div className="writeformgroup">
                <label htmlFor="fileinput">
                <i className=" writeicon fa-solid fa-plus"></i>

                </label>
                <input type="file" id="fileinput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeinputs" autoFocus={true}/>
            </div>
            <div className="writeformgroup">
                <textarea placeholder="Tell your story" type="text" className="writeinputs writetext"></textarea>
            </div>
            <button className="writesubmit">Publish</button>
        </from>
    </div>
  )
}

export default Write