import React from 'react'

function footer() {
  return (
    <>
     {/*  footer */}
     <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 offset-md-2" style={{marginLeft:"0"}}>
              <div className="fid_box">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </a>
                    <br /> rue hassine Ben Ali turki menzel jemil 7080
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </a>
                    <br />
                    +216 29 433 979
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                    <br /> mahfoudhaouji@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="dolor">
                <p>
                Basée sur un aérodrome, l'école dispose d’une zone de saut dédiée,
                 d’un centre de formation moderne, ainsi que d’avions adaptés aux besoins du parachutisme sportif.
                 <br/>

                L'Association Sportive de Parachutisme et Activités Aéronautiques Associées est ainsi un acteur majeur du parachutisme en France (ou autre pays selon le contexte),
                 offrant une expérience unique alliant adrénaline, maîtrise technique et passion du ciel. 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  © 2019 All Rights Reserved. Design by
                  <a href="https://html.design/"> Free Html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* end footer */}
      
    </>
  )
}

export default footer
