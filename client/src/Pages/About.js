import React from 'react'
import logo from '../images/logo.png'
import loading from '../images/loading.gif'
import menu_icon from '../images/menu_icon.png'
import ima from '../images/ima.png'
import about_img from '../images/about_img.png'

import Navbarre from '../components/Navbarre.js'

function About() {
  return (
    <>
<Navbarre></Navbarre>

    <div className="red_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>About</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about section */}
    <div id="about" className="about afbecros">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="titlepage">
              <figure>
                <img src={about_img} alt="#" />
              </figure>
              <p>
                {" "}
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it It is a long established fact that a
                reader will be distracted by the readable content of a page when
                lookingusing Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it{" "}
              </p>
              <a className="read_more" href="#">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about section */}
   
    {/* Javascript files*/}
    {/* sidebar */}
  </>
  )
}

export default About
