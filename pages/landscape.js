import styles from "../styles/services.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import CTA from "../components/CTA";


export default function Brush() {
  return (
    <>
      <Head>
        <title> Turf and Landscape Maintenance | Dietrich Land Care</title>
        <meta
          name="description"
          content="Welcome to Dietrich Land Care, your trusted partner for expert turf and landscape maintenance services. Our skilled team is dedicated to ensuring the lush greenery and immaculate beauty of your outdoor spaces. From lawn care to landscape upkeep, we deliver top-notch maintenance solutions tailored to your needs. Transform your property with our professional services today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Welcome to Dietrich Land Care, your trusted partner for expert turf and landscape maintenance services. Our skilled team is dedicated to ensuring the lush greenery and immaculate beauty of your outdoor spaces. From lawn care to landscape upkeep, we deliver top-notch maintenance solutions tailored to your needs. Transform your property with our professional services today!"
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
          <PageTitle title="Turf and Landscape Maintenance" />
        </div>

        <div>
          <div className={`row ${styles.section_container}`}>
            <div className="col col-sm-8 col-lg-4">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/landscape.jpg"
                  alt="Picture of landscape maintenance"
                  width={350}
                  height={350}
                  style={{
                    borderRadius: "5px",

                    margin: "0 20px 20px 0",
                    width: "500px",
                    height: "500px",
                    float: "left",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />{" "}
              </div>
            </div>
            <div className={`col col-8" ${styles.description}`}>
              <h2 className="section-title">What can we do for you?</h2>
              <p>
                The exterior of your property is the first thing that people
                see, and it’s important that it reflects well. Whether you own a
                business or a home, a beautifully planned and maintained
                property tells your guests that you care, and we are here to
                help you. Dietrich Land Care has been providing exceptional
                landscaping services in the Baltimore area for many years.
              </p>
              <p>
                Our designs are both beautiful and personalized, created with
                you and your goals and dreams in mind, and our maintenance
                services allow you to relax, knowing that your property will
                always look its best and make you proud. We provide landscaping
                services in the Baltimore area to both home and business owners.
                We pride ourselves on our service, and take the time to meet
                with and understand what each of our clients need so that we can
                provide you with exactly what you are looking for.
              </p>

              <p>
                Call us anytime to set up an appointment to see what our
                creative design team and reliable maintenance team can do to
                help you make your property look terrific.
              </p>
            </div>
          </div>
        </div>

        <CTA service="Turf and Landscape Maintenance" />
      </main>
    </>
  );
}
