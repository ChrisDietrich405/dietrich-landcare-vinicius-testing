import Image from "next/image";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import CTA from "../components/CTA";

import styles from "../styles/services.module.css";

export default function Patios() {
  return (
    <>
      <Head>
        <title> Paver Patios & Walkways | Dietrich Land Care</title>
        <meta
          name="description"
          content=" Welcome to Dietrich Land Care, your go-to destination for premium pavers, patios, retaining walls, and walkways. Our expert team specializes in crafting exquisite outdoor spaces that blend beauty and functionality. From stunning patios to sturdy retaining walls, we create lasting impressions. Contact us for top-tier hardscaping solutions today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content=" Welcome to Dietrich Land Care, your go-to destination for premium pavers patios, retaining walls, and walkways. Our expert team specializes in crafting exquisite outdoor spaces that blend beauty and functionality. From stunning patios to sturdy retaining walls, we create lasting impressions. Contact us for top-tier hardscaping solutions today!"
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
          <PageTitle title="Pavers patios, Retaining Walls and Walkways" />
        </div>
        <div>
          <div className={`row ${styles.section_container}`}>
            <div className="col-sm-8 col-lg-4">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/patio.JPG"
                  alt="Picture of finished patio"
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
            <div className={`col col-lg-8" ${styles.description}`}>
              <h2 className="section-title">
                What types of patios do we design and build?
              </h2>

              <p>
                Dietrich Land Care is the premier contractor for patio design
                and installation in Baltimore. We take great pride in creating a
                unique masterpiece for each of our customers, and every project
                is completed with the highest level of craftsmanship in our
                industry.
              </p>
              <p>
                We specialize in installing paver patios, concrete patios, and
                exposed aggregate patios, and we have many years of experience
                delivering quality projects to highly satisfied customers. From
                a plain concrete pad to a resort-style outdoor living space, we
                have you covered.
              </p>
            </div>
          </div>
          <div
            className={`row mt-5  ${styles.section_container} ${styles.column_reverse}`}
          >
            <div className="col-sm-12 col-lg-6 my-4">
              <h2 className="section-title">
                Why should I add a retaining wall?
              </h2>
              <ul className="global-list">
                <li>Stopping or reducing erosion</li>
                <li>Improving aesthetics</li>
                <li>Limiting flooding</li>
                <li>Enlarging your yard’s available space</li>
                <li>Averting sink holes and stagnant water</li>
                <li>Increase value of property</li>
              </ul>{" "}
            </div>
            <div className="col-sm-12 col-lg-6">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/retaining.png"
                  alt="Picture of a retaining wall"
                  width={650}
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
            <div className={`my-4 col-8" ${styles.description}`}>
              <h2 className="section-title">
                What should you know about retaining walls?
              </h2>
              <p>
                The retaining wall begins from the bottom of the first block or
                bottom of the ground, contrary to the widespread notion that you
                should only think about what you can see when thinking about a
                retaining wall. For instance, a retaining wall with a viewable
                height of less than 3.5 feet will usually have at least 6 inches
                of embedment (hidden wall), giving it a total wall height of
                approximately 4 feet.
              </p>
              <p>
                For cantilever or segmental gravity (block) retaining walls, a
                construction permit is usually necessary if the total height of
                the wall (exposed and buried) is over 4 feet. Even though there
                is no premium, some towns demand a building permit for walls
                higher than two feet. At wall heights between 4 and 6 feet, some
                localities will issue a building permit without an engineer’s
                signature. It is very important to confirm your local laws. Many
                block makers also impose their own height limitations. The
                maximum height constraints for a particular block system will
                typically range anywhere from 2 to 6 feet.
              </p>
              <p>
                You should not raise a block above the height advised by the
                manufacturer. Speak with the block supplier or an expert to
                confirm the maximum height for that block system if you plan to
                construct a wall higher than 2 feet. Dietrich Land Care is ready
                to help and our experts will happily answer your questions.
              </p>
            </div>
          </div>
        </div>

        <CTA service="pavers, patios, retaining Walls and walkways" />
      </main>
    </>
  );
}
