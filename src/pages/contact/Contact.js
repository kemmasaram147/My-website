import "./Contact.css"

function Contact() {
  return (
    <section>
      <div className="contact">
      <div className="contacthead">
        <h1><span className="change2">G</span>et In Touch</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="table">
        <h2><span className="change2">R</span>each Us</h2>
        <div className="tablecontent">
          <h3 className="change1">You Can Contact To The Given Details:</h3>
          <hr/>
          <span className="contactno">Phone.no: <span className="change">8008935643</span></span>
          <hr/>
          <span className="contactno">Gmail: <span className="change">kemmasaramsuresh1@gmail.com</span> </span>

        </div>
      </div>
      
    </div>
    </section>
  )
}

export default Contact