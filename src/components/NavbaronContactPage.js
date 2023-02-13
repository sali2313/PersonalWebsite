import React from "react";
import navbarphoto from "../img/navbar.png"
import { Link } from "react-router-dom";
function borobala() {
  window.scrollTo(0, 0);

}
export default function NavbaronContactPage() {
    return(
        <div className="navbarofcontact sticky-top"> 
          <div onClick={borobala} className="homeonnavbarcontact"><Link id="link2" to="/">Home</Link></div>
      </div>
          )
        }
          
        