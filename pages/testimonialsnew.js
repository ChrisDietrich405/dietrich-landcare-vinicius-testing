import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/testimonials.module.css";

import { ImQuotesLeft } from "react-icons/im";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div className={styles.testimonial_main_container}>
        <Head>
          <title>Testimonials | Dietrich Land Care</title>
          <meta
            name="description"
            content="Kathleen R, Loch Raven: 'Devin and his crew did an excellent job trimming and clearing
            out overgrown bushes as well as mulching on an older home. He
            showed up when he said he would, his staff was very polite and
            accomodating and they got it done quickly. Highly recommend
            his services.'"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dietrichlandcare.com" />
          <meta
            property="og:title"
            content="Testimonials | Dietrich Land Care"
          />
          <meta
            property="og:description"
            content="Kathleen R, Loch Raven: 'Devin and his crew did an excellent job trimming and clearing
            out overgrown bushes as well as mulching on an older home. He
            showed up when he said he would, his staff was very polite and
            accomodating and they got it done quickly. Highly recommend
            his services.'"
          />
          <meta
            property="og:image"
            content="https://dietrichlandcare.com/images/logo.jpg"
          />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
        </Head>
        <main className="container pb-2">
          <h1 className={styles.title}>Testimonials</h1>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mb-6">
              <div className="col-lg-4" style={{ paddingRight: "30px" }}>
                <Image
                  width="375"
                  height="350"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  src="/images/testimonial1.jpg"
                  className={styles.image}
                  alt="well done bush clearing and mulching"
                />
              </div>
              <div
                className="col-lg-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p>
                  {" "}
                  Devin and his crew did an excellent job trimming and clearing
                  out overgrown bushes as well as mulching on an older home. He
                  showed up when he said he would, his staff was very polite and
                  accomodating and they got it done quickly. Highly recommend
                  his services.
                </p>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center mb-6">
              <div className="col-lg-6" style={{ paddingRight: "30px" }}>
                <span>
                  <ImQuotesLeft
                    style={{
                      opacity: ".3",
                      marginBottom: "-2px",
                      marginRight: "3px",
                      fontSize: "100px",
                      color: "var(--primary-color)",
                      position: "absolute",
                      top: "-40px",
                      left: "-20px",
                      zIndex: "-1",
                    }}
                  />
                </span>
                I've been looking for help with our landscaping and yard
                cleanup/mulching for quite awhile. A few people I contacted were
                too expensive or never followed through. I found Dietrich Land
                Care on Nextdoor through several recommendations. Devin and his
                team did an AMAZING job. They surpassed my expectations and were
                reasonably priced. I would definitely recommend them! Super
                awesome 5 stars!!!!
              </div>
              <div
                className="col-lg-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Image
                  width="375"
                  height="350"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  src="/images/testimonial2.jpg"
                  className={styles.image}
                  alt="well done yard clean up and mulching"
                />
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center mb-6">
              <div className="col-lg-6" style={{ paddingRight: "30px" }}>
                <Image
                  width="375"
                  height="350"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  src="/images/testimonial3.jpg"
                  className={styles.image}
                  alt="well done backyard cleanup"
                />
              </div>
              <div
                className="col-lg-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p>
                  {" "}
                  <span>
                    <ImQuotesLeft
                      style={{
                        opacity: ".3",
                        marginBottom: "-2px",
                        marginRight: "3px",
                        fontSize: "100px",
                        color: "var(--primary-color)",
                        position: "absolute",
                        top: "-40px",
                        left: "-20px",
                        zIndex: "-1",
                      }}
                    />
                  </span>
                  Dietrich Land Care recently did a huge backyard cleanup
                  project for us, and it truly exceeded our expectations. They
                  arrived right on time and went to town on our backyard with a
                  huge team. The work was completed ahead of schedule and with
                  great care and attention to detail. Truly, our backyard has
                  never looked better. Give them a call - you won’t be
                  disappointed!
                </p>
              </div>
            </div>
          </div>
        </main>
        {/* <main className={styles.testimonial}>
         
          <div className={styles.testimonial_container}>
            <div className="row">
              <div className="col-12 col-lg-6 text-center testimonial-pic">
                {" "}
            
              </div>
              <div
                className={`"col-12 col-lg-6 text-center" ${styles.testimonial_container_client}`}
              >
                <p className={styles.quote}>
                  <span>
                    <ImQuotesLeft
                      style={{
                        opacity: ".3",
                        marginBottom: "-2px",
                        marginRight: "3px",
                        fontSize: "100px",
                        color: "var(--primary-color)",
                        position: "absolute",
                        top: "-40px",
                        left: "-20px",
                        zIndex: "-1",
                      }}
                    />
                  </span>
               
                </p>
                <div className={styles.testimonial_person}>
                  <span>
                    <h5>Kathleen R, Loch Raven</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.testimonial_container}>
            <div className="row">
              <div
                className={`"order-lg-0 order-1 col-12 col-lg-6 text-center" ${styles.testimonial_container_client}`}
              >
                <p className={styles.quote}>
                  <span>
                    <ImQuotesLeft
                      style={{
                        opacity: ".3",
                        marginBottom: "-2px",
                        marginRight: "3px",
                        fontSize: "100px",
                        color: "var(--primary-color)",
                        position: "absolute",
                        top: "-40px",
                        left: "-20px",
                        zIndex: "-1",
                      }}
                    />
                  </span>
                  I've been looking for help with our landscaping and yard
                  cleanup/mulching for quite awhile. A few people I contacted
                  were too expensive or never followed through. I found Dietrich
                  Land Care on Nextdoor through several recommendations. Devin
                  and his team did an AMAZING job. They surpassed my
                  expectations and were reasonably priced. I would definitely
                  recommend them! Super awesome 5 stars!!!!
                </p>
                <div className={styles.testimonial_person}>
                  <span>
                    <h5>Annie S, Towson</h5>
                  </span>
                </div>
              </div>
              <div className="order-lg-1 order-0 col-12 col-lg-6 text-center testimonial-pic ">
                <Image
                  width="375"
                  height="350"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  src="/images/testimonial2.jpg"
                  className={styles.image}
                  alt="well done yard clean up and mulching"
                />
              </div>
            </div>
          </div>
          <div className={styles.testimonial_container}>
            <div className="row">
              <div className="col-12 col-lg-6 text-center testimonial-pic ">
                <Image
                  width="375"
                  height="350"
                  style={{
                    borderRadius: "10px",
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  src="/images/testimonial3.jpg"
                  className={styles.image}
                  alt="well done backyard cleanup"
                />
              </div>
              <div
                className={`"col-12 col-lg-6 text-center" ${styles.testimonial_container_client}`}
              >
                <p className={styles.quote}>
                  <span>
                    <ImQuotesLeft
                      style={{
                        opacity: ".3",
                        marginBottom: "-2px",
                        marginRight: "3px",
                        fontSize: "100px",
                        color: "var(--primary-color)",
                        position: "absolute",
                        top: "-40px",
                        left: "-20px",
                        zIndex: "-1",
                      }}
                    />
                  </span>
                  Dietrich Land Care recently did a huge backyard cleanup
                  project for us, and it truly exceeded our expectations. They
                  arrived right on time and went to town on our backyard with a
                  huge team. The work was completed ahead of schedule and with
                  great care and attention to detail. Truly, our backyard has
                  never looked better. Give them a call - you won’t be
                  disappointed!
                </p>
                <div className={styles.testimonial_person}>
                  <span>
                    <h5>Laura A, Lutherville</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.link_container} mb-4`}>
            <Link href="/schedule">Contact us today!</Link>
          </div>
        </main> */}
      </div>
    );
  }
}
