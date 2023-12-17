import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

import styles from "./styles.module.css";
export default class Footer extends React.Component {
  render() {
    function currentTime() {
      let time = new Date();
      let timeNow = time.getUTCFullYear();
      return timeNow;
    }

    return (
      <div className="container-fluid">
      <div className={`row text-white ${styles.footer}`}>
        
          <div className="col-lg-3 col-xs-12 col-md-6 text-start">
            <div className="p-4">
              <div className="card-body">
                <h3>Contact Us</h3>
                <p className="mb-1">
                  <span>
                    <AiOutlinePhone style={{ marginRight: "4px" }} />
                  </span>

                <a
                  className="text-white"
                  href="tel:+4436083258"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (240) 814-4208
                </a>
              </p>
              
                <p>
                  <AiOutlineMail style={{ marginRight: "6px" }} />
                  <a
                    className="text-white"
                    href="mailto:office@dietrichlandcare.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    office@dietrichlandcare.com
                  </a>
                </p>
             
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-6">
            <div className="p-4">
              <div className="card-body">
                <h3>Serving</h3>
                <p>Baltimore County, MD • Since 2021</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-6">
            <div className="p-4">
              <div className="card-body">
                <h3>Office Hours</h3>
                <p className="mb-1">Monday-Friday: 7am-7pm</p>
                <p className="mb-1">Saturday: 9am-3:00pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xs-12 col-md-6">
            <div className="p-4">
              <div className="card-body">
                <h3>Follow Us</h3>
                <p className="mb-1">
                  <a
                    className="text-white"
                    href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                  >
                    <span>
                      <BsFacebook />
                    </span>
                    &nbsp;Facebook
                  </a>
                </p>
                <p>
                  <a
                    className="text-white"
                    href="https://www.instagram.com/dietrich_landcarellc/"
                  >
                    <span>
                      <AiFillInstagram />
                    </span>
                    &nbsp;Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>
        
        <div className={styles.footer_container_bottom}>
          <address className={styles.footer_copyright}>
            <p className="text-center">DietrichLandCare ©{currentTime()}</p>
          </address>
        </div>
      </div>
      </div>
    );
  }
}
