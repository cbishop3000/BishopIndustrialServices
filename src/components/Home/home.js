import React, { Component } from "react";
import { gsap, TweenLite } from "gsap";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

class home extends Component {
  constructor(props) {
    super(props);

    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount() {
    const Logo = document.getElementById("logo");
    const LogoLine = document.getElementById("logo-line");

    gsap.to(Logo, 1, { duration: 2, x: 100 });
    gsap.to(LogoLine, 1, { duration: 2, x: 100 });
  }

  render() {
    return (
      <div className="section-home-left-side fire">
        <ul className="service-list clearfix">
          <li className="list-position">
            <a className="service-item fire" href="#">
              <i class="icon" aria-hidden="true">
                <img
                  class="center-block img-responsive"
                  src="https://www.jtielectric.net/wp-content/uploads/2016/04/icon-electrical-engineering.svg"
                />
              </i>
              <div className="service-title one-line">
                Electrical Engineering and Design Services
              </div>
            </a>
          </li>
          <li className="list-position">
            <a className="service-item fire" href="#">
              <i class="icon" aria-hidden="true">
                <img
                  class="center-block img-responsive"
                  src="https://www.jtielectric.net/wp-content/uploads/2016/04/icon-controls-automation.svg"
                />
              </i>
              <div className="service-title one-line">
                Controls & automation
              </div>
            </a>
          </li>

          <li className="list-position">
            <a className="service-item fire" href="#">
              <i class="icon" aria-hidden="true">
                <img
                  class="center-block img-responsive"
                  src="https://www.jtielectric.net/wp-content/uploads/2016/04/icon-ul-panel.svg"
                />
              </i>
              <div className="service-title one-line">UL Panel Shop</div>
            </a>
          </li>
          <li className="list-position">
            <a className="service-item fire" href="#">
              <i class="icon" aria-hidden="true">
                <img
                  class="center-block img-responsive"
                  src="https://www.jtielectric.net/wp-content/uploads/2016/04/icon-high-voltage.svg"
                />
              </i>
              <div className="service-title one-line">
                High/Medium Voltage & Power Distribution
              </div>
            </a>
          </li>
          <li className="list-position">
            <a className="service-item fire" href="#">
              <i class="icon" aria-hidden="true">
                <img
                  class="center-block img-responsive"
                  src="https://www.jtielectric.net/wp-content/uploads/2016/04/icon-process-engineering.svg"
                />
              </i>
              <div className="service-title one-line">
                Strategic Partnerships
              </div>
            </a>
          </li>
          <li className="list-position">
            <a className="service-item fire" href="#">
              <i class="icon" aria-hidden="true">
                <img
                  class="center-block img-responsive"
                  src="https://www.jtielectric.net/wp-content/uploads/2016/04/icon-strategic-partnership.svg"
                />
              </i>
              <div className="service-title one-line">
                Process Engineering Servives
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default home;
