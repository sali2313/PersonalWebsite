import React from "react";
import navbarphoto from "../img/navbar.png"
import { Link } from "react-router-dom";

export default function Navbar() {
    let [visible, setVisible] = React.useState(true)
    function handleLinesClick(){
    setVisible(x => !x)
    }

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.transition = "0.5s";
        // document.getElementById("firstpage").style.height = "70vh";
    } else {
        document.getElementById("navbar").style.top = "-80px";
        document.getElementById("navbar").style.transition = "0.5s";
        // document.getElementById("firstpage").style.height = "100vh";
        // document.getElementById("firstpage").style.transition = "3s";
    }
    }
    function borobala() {
        window.scrollTo(0, 0);

    }
    
    return(
    <div className="originalnavbar" id="navbar"> 
      <div class="mainnavbar">
          <div className="lines" onClick={handleLinesClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
          <div className={`navbar ${visible ? "" : "responsive"}`}>
              <a href="#firstpage" ><li onClick={handleLinesClick}>Home</li></a>
              <a href="#about"><li onClick={handleLinesClick}>About</li></a>
              <a href="#Skills"><li onClick={handleLinesClick}>Skills</li></a>
              <a href="#projects"><li onClick={handleLinesClick}>Projects</li></a>
          </div>
          <Link to="/contact"><div id="link" className="hireme" onClick={borobala}>
            Hire Me!</div></Link>
      </div>
      </div>
        )
}