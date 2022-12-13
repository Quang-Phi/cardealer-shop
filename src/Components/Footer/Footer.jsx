import "./footer.scss";
export default function (props) {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-box">
                <h4 className="footer-box__title">about us</h4>
                <p>
                  Quang Phi Auto, Award-winning, family owned dealership of new
                  and pre-owned vehicles with several locations across the city.
                  Lowest prices and the best customer service guaranteed.
                </p>
                <ul className="footer-box__about">
                  <li>
                    <a href="">
                      <i className="fa-brands fa-square-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-square-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-square-snapchat"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-box">
                <h4 className="footer-box__title"></h4>
                <ul className="footer-box__service">
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      Listing
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-box">
                <h4 className="footer-box__title"></h4>
                <ul className="footer-box__service">
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      Our team
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      ABC
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-chevron-right"></i>
                      XYZ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-box">
                <h4 className="footer-box__title">contact us</h4>
                <ul className="footer-box__contact">
                  <li>
                    <i className="fa-solid fa-location-crosshairs"></i>
                    <span>address</span>
                    <p>#2997 Road, Ho Chi Minh City, Vietnam</p>
                  </li>

                  <li>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <span>phone</span>
                    <p>0964-298-523</p>
                  </li>

                  <li>
                    <i className="fa-solid fa-fax"></i>
                    <span>fax</span>
                    <p>(123) 123 456</p>
                  </li>

                  <li>
                    <i className="fa-solid fa-envelope-open-text"></i>
                    <span>email</span>
                    <p>xx.quangphi.2.9@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <span>© Copyright 2022</span>
            </div>
            <div className="col-6">
              <div className="author-name">
                <span>Made By Quang Phi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
