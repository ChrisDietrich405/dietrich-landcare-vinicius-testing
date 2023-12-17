import styles from "../styles/services.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";

export default function Seeding() {
  return (
    <>
      <Head>
        <title>Seeding, Sod and Stabilization | Dietrich Land Care</title>
        <meta
          name="description"
          content="Welcome to our premier seeding and sod services, where lush, green lawns are guaranteed. Our expert team specializes in top-notch seeding and sodding services, transforming your landscape into a verdant paradise. Trust us to create the perfect turf for your property. Contact us today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Welcome to our premier seeding and sod services, where lush, green lawns are guaranteed. Our expert team specializes in top-notch seeding and sodding services, transforming your landscape into a verdant paradise. Trust us to create the perfect turf for your property. Contact us today!"
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
          <PageTitle title="Seeding - Stabilization - Sod" />
        </div>
        <div>
          <div className={`col col-12" ${styles.description}`}>
            <p>
              We offer rapid results through our seeding and sod services. We
              work with you to offer transparency when it comes to pricing and
              timelines to help our clients decide which options are best to
              help establish healthy, welcoming lawns. Please see our “Turf and
              Landscape Maintenance” page to learn about our lawn maintenance
              services, to help keep your lawn thick and green.
            </p>
            <p>
              {" "}
              We offer seeding and straw matting or loose straw as a final stage
              in most of our work to stabilize and rejuvenate lawns after
              landscape projects. We also specifically offer grading services.
            </p>
          </div>
          <div className={`row ${styles.pictures_section_container}`}>
            <div className="col">
              <Image
                src="/images/1strow1.jpg"
                alt="Picture of seeded lush lawn"
                width={250}
                height={250}
                style={{
                  borderRadius: "5px",
                  margin: "0 20px 20px 0",
                  float: "left",
                  shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                }}
              />{" "}
            </div>
            <div className="col">
              <Image
                src="/images/1strow2.jpg"
                alt="Picture of sodded lawn"
                width={250}
                height={250}
                style={{
                  borderRadius: "5px",
                  marginTop: "20px",
                  float: "right",
                  shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                }}
              />
            </div>
            <div className="col">
              <Image
                src="/images/1strowpic3.jpg"
                alt="Picture of sodded lawn"
                width={250}
                height={250}
                style={{
                  borderRadius: "5px",
                  marginTop: "20px",
                  float: "right",
                  shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                }}
              />
            </div>
            <div className="col">
              <Image
                src="/images/1strowpic4.jpg"
                alt="Picture of sodded lawn"
                width={250}
                height={250}
                style={{
                  borderRadius: "5px",
                  marginTop: "20px",
                  float: "right",
                  shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                }}
              />
            </div>
            <div className="col">
              {/* pic done */}
              <Image
                src="/images/1strowpic5.jpg"
                alt="Picture of sodded lawn"
                width={250}
                height={250}
                style={{
                  borderRadius: "5px",
                  marginTop: "20px",
                  float: "right",
                  shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                }}
              />
            </div>
          </div>
          <div
            className={`row ${styles.section_container} ${styles.column_reverse}`}
          >
            <div className="col-sm-12 order-1"> </div>
            <div className={`col col-8" ${styles.description}`}>
              {" "}
          
              <p>
                In lawn maintenance we offer lawn patching and aerating and
                seeding services. A client can benefit hugely from yearly
                aerating, as it allows the lawn to accept nutrients and seed a
                depth conducive to better germination and stronger roots. We can
                also introduce enriched soil over aerated lawns to help level
                low spots and promote germination of seed.
              </p>
            </div>
            <div className={`row ${styles.pictures_section_container}`}>
              <div className="col">
                <Image
                  src="/images/2ndrowpic1.jpg"
                  alt="Picture of seeded lush lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    margin: "0 20px 20px 0",
                    float: "left",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />{" "}
              </div>
              <div className="col">
                <Image
                  src="/images/2ndrowpic2.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
              <div className="col">
                <Image
                  src="/images/2ndrowpic3.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
              <div className="col">
                <Image
                  src="/images/row2pic4.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
              <div className="col">
                <Image
                  src="/images/row2pic5.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={`row ${styles.section_container} ${styles.column_reverse}`}
          >
            <div className="col-sm-12 order-1"> </div>
            <div className={`col col-8" ${styles.description}`}>
              {" "}
              {/* <h2 className="section-title">What is sod?</h2> */}
              <p>
                For clients looking for instant results, we also offer sod. We
                deliver your sod from family-owned Maryland farms, sometimes as
                far as an hour away, in order to get you the healthiest fresh
                cut Tall-Fescue you’ll find. We offer delivery and full
                installation, as well as watering and maintenance directions. We
                offer extensive prep work, including removing the existing lawn,
                weeds and any other vegetation, by the roots. We remove rocks
                and waste from the lawn, and introduce fresh enriched topsoil
                where needed.
              </p>
            </div>
            <div className={`row ${styles.pictures_section_container}`}>
              <div className="col">
                <Image
                  src="/images/row3pic1.jpg"
                  alt="Picture of seeded lush lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",

                    margin: "0 20px 20px 0",

                    float: "left",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />{" "}
              </div>
              <div className="col">
                <Image
                  src="/images/row3pic2.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
              <div className="col">
                <Image
                  src="/images/row3pic3.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
              <div className="col">
                <Image
                  src="/images/row3pic4.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
              <div className="col">
                <Image
                  src="/images/row3pic5.jpg"
                  alt="Picture of sodded lawn"
                  width={250}
                  height={250}
                  style={{
                    borderRadius: "5px",
                    marginTop: "20px",
                    float: "right",
                    shapeOutside: "polygon(100% 0%, 100% 100%, 0% 100%, 0 0%)",
                  }}
                />
              </div>
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
          <CTA service="seeding and sod services" />
          <div className={styles.link_container} style={{ margin: "0" }}>
            <Link href="/seeding-sod-instructions">
              Click here for directions on caring for your new lawn
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
