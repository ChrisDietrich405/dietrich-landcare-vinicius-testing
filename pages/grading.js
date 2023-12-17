import Image from "next/image";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import CTA from "../components/CTA";

import styles from "../styles/services.module.css";

export default function Excavation() {
  return (
    <>
      <Head>
        <title>Grading & Excavation | Dietrich Land Care</title>
        <meta
          name="description"
          content="Looking for a reliable grading and excavation company? Our team of skilled professionals offers top-notch services for all your excavation needs. From land grading to site preparation, we ensure precision and efficiency for successful construction projects. Contact us now!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Looking for a reliable grading and excavation company? Our team of skilled professionals offers top-notch services for all your excavation needs. From land grading to site preparation, we ensure precision and efficiency for successful construction projects. Contact us now!"
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
      <main className={styles.container}>
        <div className={styles.title_container}>
          <PageTitle title="Grading & Excavation" />
        </div>

        <div>
          <div className={`row ${styles.section_container}`}>
            <div className="col-sm-8 col-lg-5">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/regrades.jpg"
                  alt="Picture of regrading"
                  width={450}
                  height={350}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "5px",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />{" "}
              </div>
            </div>
            <div className={`col-sm-12 col-lg-7`}>
              <h2 className="section-title">What is grading?</h2>

              <p>
                Our skilled operators are ready to dig and move soil and stone.
                From excavating for foundations and utilities, to swales and
                regrading around your home to manage stormwater, we will dig it,
                push it, grade it, and compact it.
              </p>
              <div>
                <p>Results of improper grading include:</p>
                <ul className="global-list">
                  <li>Uneven or lumpy areas of the lawn</li>
                  <li>Water pooling at the foundation</li>
                  <li>Standing water that causes mosquito breeding</li>
                  <li>Soggy lawn which makes area practically unusable</li>
                  <li>Damage to tree roots</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.intro}></div>

        <CTA service="grading & excavation services" />
      </main>
    </>
  );
}
