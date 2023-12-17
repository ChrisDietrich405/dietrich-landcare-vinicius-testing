import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import CTA from "../components/CTA";
import SectionTitle from "../components/SectionTitle";

import styles from "../styles/services.module.css";

export default function Brush() {
  return (
    <>
      <Head>
        <title>Stump Grinding | Dietrich Land Care</title>
        <meta
          name="description"
          content="Transform your landscape with professional stump grinding services. Say goodbye to unsightly tree stumps that mar your property's beauty. Our expert team utilizes state-of-the-art equipment to efficiently remove stumps, promoting safety and enhancing the aesthetics of your outdoor space. Discover the benefits of stump grinding today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content=" Dietrich Landcare provides above and beyond brush/lot clearing and stump grinding services"
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
        <div>
          <div className={styles.title_container}>
            <PageTitle title="Stump Grinding" />
          </div>
          <div
            className={`row my-4 ${styles.section_container} ${styles.column_reverse}`}
          >
            <div className="col-sm-12 col-lg-5 order-1">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/stump-removal.jpg"
                  alt="Picture of stump grinding"
                  width={450}
                  height={350}
                  style={{
                    borderRadius: "5px",

                    margin: "0 20px 20px 0",

                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
            </div>
            <div className={`col-sm-12 col-lg-7 my-4" ${styles.description}`}>
              {" "}
              <h2 className="section-title">What is stump grinding?</h2>
              <p>
                This is the process of getting rid of tree stumps from your
                property, which can be a major hazard to people walking or
                playing in the area. It's one of our most popular and necessary
                services. Our skilled technicians use specialized machinery to
                grind the stump down to below ground level, allowing you to
                reclaim the space for other purposes.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.intro}></div>

        <CTA service="stump grinding services" />
      </main>
    </>
  );
}
