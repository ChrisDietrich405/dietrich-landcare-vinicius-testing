import Image from "next/image";
import Head from "next/head";
import CTA from "../components/CTA";
import PageTitle from "../components/PageTitle";

import styles from "../styles/services.module.css";

export default function Garden() {
  return (
    <>
      <Head>
        <title>Garden Bed & Landscape Installations | Dietrich Land Care</title>
        <meta
          name="description"
          content="Welcome to Dietrich Land Care, your one-stop destination for exquisite garden bed and landscape installations. Our expert team specializes in creating captivating outdoor spaces that enhance the beauty and functionality of your property. From stunning garden beds to flawless landscape installations, we bring your vision to life. Contact us for a mesmerizing outdoor transformation today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Welcome to Dietrich Land Care, your one-stop destination for exquisite garden bed and landscape installations. Our expert team specializes in creating captivating outdoor spaces that enhance the beauty and functionality of your property. From stunning garden beds to flawless landscape installations, we bring your vision to life. Contact us for a mesmerizing outdoor transformation today!"
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
          <PageTitle title="Garden Bed & Landscape Installations" />
        </div>
        <div>
          <div className={`row ${styles.section_container}`}>
            <div className="col col-sm-8 col-lg-4">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  id="bootstrap-overrides"
                  src="/images/garden1.jpg"
                  alt="Vegetable garden"
                  width={350}
                  height={350}
                  style={{
                    borderRadius: "5px",
                  }}
                />{" "}
              </div>
            </div>
            <div className={`col col-8 ${styles.description}`}>
              <h2 className="section-title">
                What gardening services do we provide?
              </h2>

              <p>
                Whether you are landscaping your home or business, plants bring
                you back in harmony with nature to help create a soothing and
                relaxing environment. We can design a 4 season look for your
                property by taking into account bloom times, colors, bark
                features, size, shapes and specific seasonal traits.
              </p>

              <p>
                When you are ready to take the next step in creating a beautiful
                space, let us know. We'll choose plants that will flourish at
                your location and help guide care for them so they continue
                looking their finest for the future.
              </p>
              <p>
                Whether you're looking for a rejuvenating spot to spend time in
                or are trying figure out how best use your space, our garden
                design projects will most assuredly inspire you.
              </p>
            </div>
          </div>
          <div
            className={`row ${styles.section_container} ${styles.column_reverse}`}
          >
            <div className="col col-sm-8 col-lg-4 order-1">
              <div className={styles.section_container_img}>
                <Image
                  src="/images/garden2.jpg"
                  alt="Flower garden"
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
            <div className={`col col-8 my-4" ${styles.description}`}>
              {" "}
              <h2 className="section-title">
                What maintenance services are necessary?
              </h2>
              <p>
                Regular maintenance, particularly in the change of seasons,
                stimulates growth and helps your garden thrive. Clearing away
                old material is the best way to welcome new buds. Properly
                preparing for new seasons will help your garden to adapt to
                changing conditions.
              </p>
              <p>
                Gardening maintenance plans also give us the chance to check in
                on your garden, allowing us to monitor the well-being of your
                plants and implement proactive remedies. You won’t have to worry
                about insect damage, water or soil issues with regular visits
                from our knowledgeable gardeners. Dietrich Land Care offers
                personalized service plans and scheduling options to accommodate
                your lifestyle and degree of interest in learning about your
                garden.
              </p>
            </div>
          </div>
        </div>

        <CTA
          service="Garden Bed & Landscape Installations"
          className={styles.cta}
        />
      </main>
    </>
  );
}
