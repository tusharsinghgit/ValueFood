import React from 'react';

export default function About() {
  return (
    <>
      <section className="about spad">
        <div className="container">
          <div className="about__text">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__text">
                  <h2>About Us</h2>
                  {/* <div className="breadcrumb__option">
                    <a href="#">Home</a>
                    <span>About</span>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="about__pic__item__large">
                  <img src="img/fwaware9.jfif" alt="About Us"  width="500" height="auto"  />
                </div>
                <div className="about__pic">
                  <div className="about__pic__item">
                    <img src="img/about.jpg" alt="About Us" />
                  </div>
                  <div className="about__pic__item">
                    <img src="img/about-2.jpg" alt="About Us" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about__right__text">
                  <h2>Welcome to ValueFood!</h2>
                  <p>
                    At ValueFood, we believe that every ingredient has the potential to become a delicious meal. Our mission is to help you discover the joy of cooking with what you have on hand while reducing food waste. By providing innovative recipes based on the ingredients you already have, we make it easy for you to create tasty and nutritious meals without unnecessary waste.
                  </p>
                  <p>
                    Our easy-to-use platform allows you to input your available ingredients and receive personalized recipe suggestions. Whether you're a seasoned chef or a home cook, our goal is to inspire you to make the most of your pantry and reduce food waste.
                  </p>
                  <h3>Our Values</h3>
                  <ul>
                    <li>Empowering home cooks to create delicious meals with what they have.</li>
                    <li>Reducing food waste through innovative and practical solutions.</li>
                    <li>Promoting sustainability and mindful eating habits.</li>
                  </ul>
                  <p>
                    Join us in our mission to ValueFood and fight against food waste, one recipe at a time. Together, we can make a difference by valuing every ingredient and creating a more sustainable future.
                  </p>
                  {/* <div className="about__right__text__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="footer">
        <div className="container-fluid">
          <div className="footer__instagram">
            <div className="footer__instagram__avatar">
              <div className="footer__instagram__avatar--pic">
                <img src="img/footer/instagram-avatar.jpg" alt="Instagram Avatar" />
              </div>
              <div className="footer__instagram__avatar--text">
                <h5>@valuefood</h5>
                <span>23.7k followers</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-1.jpg"></div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-2.jpg"></div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-3.jpg"></div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-4.jpg"></div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-5.jpg"></div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-6">
                <div className="footer__instagram__item set-bg" data-setbg="img/footer/ip-6.jpg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__text">
                <div className="footer__logo">
                  <a href="#"><img src="img/logo.png" alt="ValueFood Logo" /></a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <div className="footer__social">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                  <a href="#"><i className="fa fa-youtube-play"></i></a>
                  <a href="#"><i className="fa fa-envelope-o"></i></a>
                </div>
              </div>
              <div className="footer__copyright">
                {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> 
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> 
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
