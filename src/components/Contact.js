import React from "react";
import NavbaronContactPage from "./NavbaronContactPage";

export default function Form() {
    let [sucsess, setSucsess] = React.useState(false)
    function handleSumbit(e) {
        setSucsess(true)
        // e.preventDefault();
        // console.log("form sibmitted")
    }

    return(<>
  <NavbaronContactPage />
  <div id="contact" style={{paddingTop:"4vh"}}>
  <div className="callme">
      <div>Send me an E-mail:<br/>
      Sali.up44@gmail.com
      </div>
      <div>Give me a call:<br></br>
      <a href="#" className="myphone">09014242572</a>
      </div>
  </div>
  <form action="https://submit-form.com/Fdu4LnW1" method="POST" onSubmit={handleSumbit} id="form"style={{width:"40%",margin:"auto",textAlign:"center",paddingBottom:"100px"}} >
  {sucsess && <div className="alert alert-success mt-3">
  <strong>Thanks!</strong> Your message successfully send.
    </div>}
  <div className="form">
  <div className="row eachform">
    <input type="text" name="Name" className="forminput" autoComplete="off" placeholder="Name" aria-label="First name" required></input>
      <div className="lefthalfborder"></div>
  </div>
  <div className="row eachform">
    <input type="text" name="Email" className="forminput " autoComplete="off" placeholder="Email address" aria-label="Last name" required/>
    <div className="lefthalfborder"></div>
  </div>
  <div className="row eachform">
    <input type="text" name="PhoneNumber" className="forminput" autoComplete="off" placeholder="Phone Number" aria-label="First name" required/>
    <div className="lefthalfborder"></div>
  </div>
  <div className="row eachform">
    <input type="text" name="Linkedin" className="forminput" autoComplete="off" placeholder="Linkedin (optional)" aria-label="First name"/>
    <div className="lefthalfborder"></div>
  </div>
  <div className="row eachform" >
    <input type="text" id="message" name="message" className="forminput" autoComplete="off" placeholder="Write your message ..." aria-label="Last name" required/>
    <div className="lefthalfborder"></div>
  </div>
  </div>
  <div className=" mt-5" style={{margin:"auto"}}>
    <button className="sendmessagebutton" type="submit">Send Message</button>
  </div>
</form>
</div>
</>
        )

}