import React from 'react'

function footer() {
  return (
    <>
     {/*  footer */}
     <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="fid_box">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </a>
                    <br /> Location
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </a>
                    <br />
                    +01 1234567890
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </a>
                    <br /> demo@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="dolor">
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitationipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation
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
