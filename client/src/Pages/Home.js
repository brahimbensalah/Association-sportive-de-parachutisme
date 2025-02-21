import React from 'react'
import Navbarre from '../components/Navbarre.js'
import ima from '../images/ima.png'
import about_img from '../images/about.jpg'
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
                  Parachuting  and <br/> aeronautical <br/>activities
                  </h1>
                  <figure>
                    <img src="	https://skycaptain.themerex.net/splash/images/header/chute.png" alt="#" style={{height:"500px"}} />
                    {/* <img src={ima} alt="#" /> */}
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
                    <img src={ima} alt="#"   />
                    
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
    <div className="container py-5">
  <div id="about" className="about afbecros">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            className="titlepage text-center"
            style={{
              background: "white",
              padding: 20,
              // borderRadius: 10,
              // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: 20
            }}
          >
            <h2>About</h2>
            <br/><br/>


            <figure>
              <img
                src={about_img}
                alt="Présentation de l'association"
                style={{
                  width: "100%",
                  maxWidth: 800,
                  maxHeight: 600,
                  display: "block",
                  margin: "0 auto 20px",
                  borderRadius: 10
                }}
              />
            </figure>

            <p>
              L'Association Sportive de Parachutisme et Activités Aéronautiques
              Associées est une école spécialisée dans la formation et la
              pratique des sports aériens, principalement le parachutisme. Elle
              offre un cadre structuré et sécurisé pour les amateurs de
              sensations fortes souhaitant découvrir ou se perfectionner dans
              les disciplines aéronautiques.
            </p>
            <br/><br/>
            <h3>Missions et Activités</h3>
            <br/>
            <ul className="text-start">
              <li>
                <strong>Formation au parachutisme</strong> : Initiation,
                progression et perfectionnement des pratiquants, encadrés par
                des instructeurs qualifiés.
              </li>
              <li>
                <strong>Baptêmes de saut</strong> : Expérience unique de saut en
                tandem pour les débutants.
              </li>
              <li>
                <strong>Programmes de progression</strong> : Formations PAC
                (Progression Accompagnée en Chute) pour une autonomie rapide.
              </li>
              <li>
                <strong>Activités aériennes annexes</strong> : Pilotage d’ULM,
                vols en soufflerie, sensibilisation aux métiers de
                l’aéronautique.
              </li>
              <li>
                <strong>Événements et compétitions</strong> : Organisation de
                stages et de compétitions nationales et internationales.
              </li>
            </ul>
            <br/><br/>
            <h3>Encadrement et Sécurité</h3>
            <br/>
            <p>
              L’école met un point d'honneur à garantir la sécurité de ses
              pratiquants grâce à un matériel de pointe, des procédures
              rigoureuses et une équipe d’instructeurs expérimentés agréés par
              les instances de l’aviation civile.
            </p>
           
          </div>
        </div>
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
                <img src="https://skycaptain.themerex.net/wp-content/uploads/2019/02/image-21-copyright.jpg" alt="#" />
              </figure>
              <h3>slasse1</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="classes_box">
              <figure>
                <img src="https://templatekit.jegtheme.com/skydiva/wp-content/uploads/sites/294/2022/06/paragliding-photo-live-life-to-the-fullest-sport-hobby--e1655954832818.jpg" alt="#" />
              </figure>
              <h3>classe2</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="classes_box">
              <figure>
                <img src="https://skycaptain.themerex.net/wp-content/uploads/2019/02/image-22-copyright.jpg" alt="#" />
              </figure>
              <h3>classe3</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="p_fulltext">
              <p>
              L'Association Sportive de Parachutisme et Activités Aéronautiques Associées est une école spécialisée 
              dans la formation et la pratique des sports aériens, principalement le parachutisme. Elle offre un cadre
               structuré et sécurisé pour les amateurs de sensations fortes souhaitant découvrir ou se perfectionner dans les disciplines aéronautiques.{" "}
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
                            <h3>⭐ Sophie M. – Une expérience inoubliable !</h3>
                            <p>
                            "J’ai toujours rêvé de sauter en parachute, et grâce à cette école, mon premier saut a été une expérience incroyable !
                             L’équipe est super professionnelle, rassurante et passionnée. Tout était bien encadré, et je me suis sentie en totale sécurité. Hâte de recommencer !"
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
                            <h3>⭐ Lucas T. – Formation au top !
                            </h3>
                            <p>
                            "J’ai suivi la formation PAC pour devenir autonome en parachutisme, et je ne peux que recommander cette école ! 
                            Les instructeurs sont pédagogues, patients et vraiment passionnés. Le matériel est de haute qualité et l’ambiance entre les élèves est géniale. Une aventure unique !"
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
                            <h3>⭐ David R. – Sensations fortes garanties !</h3>
                            <p>
                            "Que ce soit pour un saut en tandem ou une formation plus poussée, cette école est le lieu idéal pour les amateurs d’adrénaline. 
                            L’encadrement est impeccable, et le personnel est toujours à l’écoute. J’ai vécu des moments incroyables à chaque saut. Une adresse incontournable pour tous les passionnés d’aéronautique !"
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
