import React from 'react'

import Navbarre from '../components/Navbarre.js'

function classes() {
  return (
    <> 
<Navbarre></Navbarre>

  <div className="red_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2> classes</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* classes section */}
  <div className="classes afbecros">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="classes_box">
            <figure>
              <img src="images/classes_img1.png" alt="#" />
            </figure>
            <h3>skating</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="classes_box">
            <figure>
              <img src="images/classes_img2.png" alt="#" />
            </figure>
            <h3>skating</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="classes_box">
            <figure>
              <img src="images/classes_img3.png" alt="#" />
            </figure>
            <h3>skating</h3>
          </div>
        </div>
        <div className="col-md-12">
          <div className="p_fulltext">
            <p>
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
  {/* classes section */}
 
  {/* Javascript files*/}
  {/* sidebar */}
</>

   
  )
}

export default classes
