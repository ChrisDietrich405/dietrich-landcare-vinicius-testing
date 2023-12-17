import styles from "../styles/services.module.css";
import Image from "next/image";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import CTA from "../components/CTA";

export default function Seeding() {
  return (
    <>
      <Head>
        <title>Drainage | Dietrich Land Care</title>
        <meta
          name="description"
          content="Discover professional drainage services for efficient water management. Our expert team specializes in comprehensive drainage solutions, including installation, maintenance, and repair. Ensure a dry and secure environment with our top-tier drainage expertise. Contact us today for reliable, prompt, and tailored drainage solutions tailored to your needs."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Discover professional drainage services for efficient water management. Our expert team specializes in comprehensive drainage solutions, including installation, maintenance, and repair. Ensure a dry and secure environment with our top-tier drainage expertise. Contact us today for reliable, prompt, and tailored drainage solutions tailored to your needs."
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
          <PageTitle title="Drainage" />
        </div>
        <div>
          <div className={`row ${styles.section_container}`}>
            <div className="col-sm-8 col-lg-4">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/drainage2.jpg"
                  alt="Picture of drainage pipe"
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
                Welcome to Dietrich Land Care, your trusted partner for
                comprehensive drainage solutions. As a leading authority in the
                field, we specialize in providing top-tier drainage services
                tailored to meet your specific needs. Whether you're facing
                minor blockages or major drainage system issues, our expert team
                is here to ensure your property remains dry, safe, and free from
                water-related concerns.
              </p>
              <p>
                At Dietrich Land Care, we pride ourselves on our unwavering
                commitment to customer satisfaction, professionalism, and
                cutting-edge technology. Our highly skilled technicians are
                equipped with the latest tools and techniques to swiftly
                diagnose and resolve any drainage challenge, minimizing
                disruptions to your daily routine.
              </p>

              <p>
                Call us anytime to set up an appointment to see what our
                creative design team and reliable maintenance team can do to
                help you make your property look terrific.
              </p>
            </div>
          </div>
          <div
            className={`row ${styles.section_container} ${styles.column_reverse}`}
          >
            <div className="col-sm-8 col-lg-4 order-1">
              {" "}
              <div className={styles.section_container_img}>
                <Image
                  src="/images/drainage1.jpg"
                  alt="Picture of drainage pipes"
                  width={350}
                  height={350}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
            </div>
            <div className={`col col-8" ${styles.description}`}>
              {" "}
              <h2 className="section-title">What are our services?</h2>
              <ul className="global-list-drainage">
                <li>
                  {" "}
                  Drain Cleaning: Our expert technicians use advanced techniques
                  and equipment to clean clogged drains, eliminating blockages
                  and preventing future issues.
                </li>
                <li>
                  {" "}
                  Pipe Repair and Replacement: Whether it's a minor repair or a
                  complete pipe replacement, our team can handle it all. We use
                  durable materials and modern methods to ensure a long-lasting
                  solution.
                </li>
                <li>
                  Rooter Services: Stubborn tree roots invading your plumbing
                  system? Our rooter services can effectively clear out root
                  intrusions and restore proper drainage flow.{" "}
                </li>
                <li>
                  {" "}
                  Stormwater Management: Our team can design and implement
                  efficient stormwater management systems to prevent flooding
                  and water damage during heavy rains.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
          className={styles.link_container}
        >
          <CTA service="drainage services" />
        </div>
      </main>
    </>
  );
}
