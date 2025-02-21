import React from 'react'
import Navbarre from '../components/Navbarre.js'
import ima from '../images/ima.png'
import about_img from '../images/about_img.png'
import classes_img1 from '../images/classes_img1.png'
import classes_img2 from '../images/classes_img2.png'
import classes_img3 from '../images/classes_img3.png'






function Home() {

  
  
  return (
    <>  
<Navbarre></Navbarre>

    <section className="banner_main">
      <div id="banner1" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#banner1" data-slide-to={0} className="active" />
          <li data-target="#banner1" data-slide-to={1} />
          <li data-target="#banner1" data-slide-to={2} />
          <li data-target="#banner1" data-slide-to={3} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption">
                <div className="text-bg">
                  <h1>
                    skating<span className="midil_img"> board</span>
                  </h1>
                  <figure>
                    <img src={ima} alt="#" />
                  </figure>
                  <p>
                    It is a long established fact that a reader will be <br />{" "}
                    distracted by the readable content of a page when
                    <br /> looking at its{" "}
                  </p>
                  <a className="read_more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <div className="text-bg">
                  <h1>
                    skating<span className="midil_img"> board</span>
                  </h1>
                  <figure>
                    <img src={ima} alt="#" />
                  </figure>
                  <p>
                    It is a long established fact that a reader will be <br />{" "}
                    distracted by the readable content of a page when
                    <br /> looking at its{" "}
                  </p>
                  <a className="read_more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <div className="text-bg">
                  <h1>
                    skating<span className="midil_img"> board</span>
                  </h1>
                  <figure>
                    <img src={ima} alt="#" />
                  </figure>
                  <p>
                    It is a long established fact that a reader will be <br />{" "}
                    distracted by the readable content of a page when
                    <br /> looking at its{" "}
                  </p>
                  <a className="read_more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <div className="text-bg">
                  <h1>
                    skating<span className="midil_img"> board</span>
                  </h1>
                  <figure>
                    <img src={ima} alt="#" />
                  </figure>
                  <p>
                    It is a long established fact that a reader will be <br />{" "}
                    distracted by the readable content of a page when
                    <br /> looking at its{" "}
                  </p>
                  <a className="read_more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#banner1"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left" aria-hidden="true" />
        </a>
        <a
          className="carousel-control-next"
          href="#banner1"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </section>
    {/* end banner */}
    {/* about section */}
    <div id="about" className="about afbecros">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>About</h2>
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
    {/* classes section */}
    <div className="classes afbecros">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2> classes</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="classes_box">
              <figure>
                <img src={classes_img1} alt="#" />
              </figure>
              <h3>skating</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="classes_box">
              <figure>
                <img src={classes_img2} alt="#" />
              </figure>
              <h3>skating</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="classes_box">
              <figure>
                <img src={classes_img3} alt="#" />
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
    {/* testimonial section */}
    <div id="testimonial" className="testimonial afbecros">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>
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
    {/* contact section */}
    <div id="contact" className="contact afbecros">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <form id="request" className="main_form">
              <div className="row">
                <div className="col-md-12 ">
                  <input
                    className="contactus"
                    placeholder="Name"
                    type="type"
                    name="Name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Phone Number"
                    type="type"
                    name="Phone Number"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Email"
                    type="type"
                    name="Email"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactusmess"
                    placeholder="Message"
                    type="type"
                    message="Name"
                  />
                </div>
                <div className="col-md-12">
                  <button className="send_btn">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* end contact section */}   
    {/* Javascript files*/}
    {/* sidebar */}
  </>
  )
}

export default Home
