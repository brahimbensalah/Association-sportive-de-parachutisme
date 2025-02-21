import React from 'react'
import Navbarre from '../components/Navbarre.js'

function Testimonials() {
  return (      
    <>
<Navbarre></Navbarre>
  <div className="red_bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* testimonial section */}
  <div id="testimonial" className="testimonial afbecros">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            id="myCarousel"
            className="carousel slide testimonial_Carousel "
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} />
              <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="testimonial_box">
                          <h3>markden</h3>
                          <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitationipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="testimonial_box">
                          <h3>markden</h3>
                          <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitationipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="testimonial_box">
                          <h3>markden</h3>
                          <p>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitationipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end testimonial section */}
  {/* Javascript files*/}
  {/* sidebar */}
</>

  )
}

export default Testimonials
