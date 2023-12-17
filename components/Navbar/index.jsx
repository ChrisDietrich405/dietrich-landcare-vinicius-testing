import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./styles.module.css";

const services = [
  { title: "Brush & Lot Clearing", link: "brush" },
  { title: "Stump Grinding", link: "stump_grinding" },
  { title: "Grading & Excavation", link: "grading" },
  { title: "Seeding, Stabilization, and Sod", link: "seeding" },
  { title: "Drainage", link: "drainage" },
  {
    title: "Garden Bed & Landscape Installations",
    link: "garden",
  },
  { title: "Paver Patios & Walkways", link: "patios" },
  { title: "Turf & Landscape Maintenance", link: "landscape" },
];

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { showHamburger: true, user: null };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem("account");
    Router.push("/login");
    this.setState({ user: null });
  }

  componentDidUpdate() {
    const authUser = localStorage.getItem("account");
    if (authUser) {
      if (!this.state.user) {
        this.setState({ user: JSON.parse(authUser) });
      }
    } else {
      if (this.state.user) {
        this.setState({ user: null });
      }
    }
  }

  render() {
    return (
      <>
        <header className={`${styles.header} navbar-expand-md`}>
          <div className={`${styles.header_inner} container-fluid`}>
            <Link href="/">
              <a
                data-testid="logo"
                className={`${styles.image_span} "navbar-brand mr-4 mt-1"`}
              >
                <Image
                  className={styles.logo}
                  src="/images/logo.jpg"
                  width="120px"
                  height="120px"
                  alt="logo"
                />
              </a>
            </Link>
            <button
              style={{ zIndex: "20" }}
              className={styles.navbar_toggler}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                onClick={() =>
                  this.setState({ showHamburger: !this.state.showHamburger })
                }
                className={styles.navbar_toggler_icon}
              >
                {this.state.showHamburger ? (
                  <GiHamburgerMenu style={{ fontSize: "20pt" }} />
                ) : (
                  <AiOutlineCloseCircle style={{ fontSize: "20pt" }} />
                )}
              </span>
            </button>

            <nav
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ textAlign: "center" }}
            >
              <ul
                className={`${styles.nav_list} navbar-nav me-auto mb-2 mb-lg-0 `}
              >
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link text-white" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                {services && (
                  <li
                    className="nav-item dropdown"
                    style={{ zIndex: 3, position: "relative" }}
                  >
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} dropdown-menu p-4"`}
                      aria-labelledby="navbarDropdown"
                    >
                      {services.map((service, key) => {
                        return (
                          <li key={key}>
                            <a
                              className={`${styles.dropdown_item} dropdown-item`}
                              href={`/${service.link}`}
                            >
                              {service.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                )}
                <li className="nav-item">
                  <Link href="/testimonials">
                    <a className="nav-link text-white" aria-current="page">
                      Testimonials
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link text-white" aria-current="page">
                      Contact
                    </a>
                  </Link>
                </li>
                {!this.state.user ? (
                  <>
                    <li className="nav-item">
                      <Link href="/login">
                        <a className="nav-link text-white" aria-current="page">
                          Login
                        </a>
                      </Link>{" "}
                    </li>
                  </>
                ) : (
                  <>
                    {this.state.user.profile_id === 1 && (
                      <li className="nav-item">
                        <>
                          <Link href="/invoice-dashboard">
                            <a
                              className="nav-link text-white"
                              aria-current="page"
                            >
                              Invoice Dashboard
                            </a>
                          </Link>
                        </>
                      </li>
                    )}

                    <li className="nav-item">
                      <Link href="/customized-service">
                        <a className="nav-link text-white" aria-current="page">
                          My account
                        </a>
                      </Link>{" "}
                    </li>
                    <li className="nav-item">
                      <span onClick={this.handleLogout}>
                        <a className="nav-link text-white" aria-current="page">
                          Logout
                        </a>
                      </span>{" "}
                    </li>
                  </>
                )}
              </ul>

              <div className={styles.phone_number}>
                <BsTelephoneFill className={styles.phone} />

                <p>
                  <a
                    className={styles.phone_font}
                    href="tel:14436083258"
                    data-testid="phone"
                  >
                    (240) 814 4208
                  </a>
                </p>
              </div>

              <div className={styles.social_icons_container}>
                <a
                  href="https://www.facebook.com/Dietrich-Land-Care-LLC-571934750168436"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="facebook"
                >
                  <BsFacebook
                    className={`${styles.social_media_icon} ${styles.facebook_icon}`}
                  />
                </a>
                <a
                  href="https://www.instagram.com/dietrich_landcarellc/"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="instagram"
                >
                  <AiFillInstagram
                    className={`${styles.social_media_icon} ${styles.instagram_icon}`}
                  />
                </a>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
