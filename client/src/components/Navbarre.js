import React from 'react'
import logo from '../images/logo.png'
import loading from '../images/loading.gif'
import menu_icon from '../images/menu_icon.png'

function Navbarre() {
    const  openNav=()=> {
        console.log("Opening sidebar");
    
        document.getElementById("mySidepanel").style.width = "250px";
      }
      
      const closeNav=()=> {
        document.getElementById("mySidepanel").style.width = "0";
      }
  return (
    <>
     {/* loader  */}
        <div className="loader_bg">
          <div className="loader">
            <img src={loading} alt="#" />
          </div>
        </div>
        {/* end loader */}
        <div id="mySidepanel" className="sidepanel">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            ×
          </a>
          <a className="active" href="index.html">
            Home
          </a>
          <a href="/About">About</a>
          <a href="/Classes">Classes</a>
          <a href="/Testimonials">Testimonials</a>
          <a href="/Contact">Contact</a>
        </div>
        {/* header */}
        <header>
          {/* header inner */}
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <a href="/">
                          <img src={logo}  alt="#" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <div className="right_bottun">
                    <a className="login" href="/Login">
                      Login
                    </a>
                    <button className="openbtn" onClick={openNav}>
                      <img src={menu_icon} alt="#" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header inner */}
        {/* end header */}
        {/* banner */}
      
    </>
  )
}

export default Navbarre
