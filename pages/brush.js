import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import CTA from "../components/CTA";

import styles from "../styles/services.module.css";

export default function Brush() {
  return (
    <>
      <Head>
        <title>Brush & Lot Clearing | Dietrich Land Care</title>
        <meta
          name="description"
          content=" Get top-notch brush and lot clearing services from our expert team. We specialize in professional land clearing solutions, ensuring your property is free from overgrowth and debris. Contact us now for efficient and reliable brush and lot clearing services near you!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Get top-notch brush and lot clearing services from our expert team. We specialize in professional land clearing solutions, ensuring your property is free from overgrowth and debris. Contact us now for efficient and reliable brush and lot clearing services near you!"
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
          <PageTitle title="Brush & Lot Clearing" />
        </div>

        <div>
          <div className={`row ${styles.section_container}`}>
            <div className="col-sm-8 col-lg-5">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/clearing.jpg"
                  alt="Picture of brush clearing"
                  width={450}
                  height={350}
                  style={{
                    borderRadius: "5px",
                    margin: "0 20px 20px 0",
                    float: "left",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />{" "}
              </div>
            </div>
            <div className={`col-7 my-4 ${styles.description}`}>
              <h2 className="section-title">What is brush and lot clearing?</h2>

              <p>
                At Dietrich Land Care, we are committed to keeping your home and
                land clear of brush and unwanted vegetation, allowing you and
                your family the freedom to enjoy the space you’ve worked hard
                for. If you have a plan to convert your usable space to a
                driveway, pad, or other accommodating feature to your home, we
                are happy to work with you on a plan to take our services
                several steps further, to ensure your dream becomes a reality.
                Please see our other services for more details.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.intro}></div>

        <CTA service="brush & lot clearing services" />
      </main>
    </>
  );
}
