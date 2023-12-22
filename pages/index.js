//shoe@gmail.com password

import React from "react";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import SlideShow from "../components/SlideShow";
import CTA from "../components/CTA";
import PageTitle from "../components/PageTitle";
import styles from "../styles/home.module.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.home_container}>
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script id="ga" strategy="lazyOnload">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
          </Script>
          <Head>
            <title>Home | Dietrich Land Care</title>
            <meta
              name="description"
              content="Dietrich Land Care is a landscaping company specializing in brush / lot clearing & stump grinding, excavation & grading services, seeding & sod services, general maintenance services, garden bed installations & maintenance, landscape renovations & features, patios, retainings walls, turf, fence installation, stump removal, snow removal, regrades, mulch installation"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dietrichlandcare.com" />
            <meta property="og:title" content="Dietrich Land Care" />
            <meta
              property="og:description"
              content="Dietrich Land Care is a landscaping company specializing in brush / lot clearing & stump grinding, excavation & grading services, seeding & sod services, general maintenance services, garden bed installations & maintenance, landscape renovations & features, patios, retainings walls, turf, fence installation, stump removal, snow removal, regrades, mulch installation"
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
        </>

        <div className={styles.home_slideshow_container}>
          <SlideShow
            images={[
              {
                url: "/images/slideshow-stump-grinding.jpg",
                title: "Stump Grinding",
              },
              {
                url: "/images/slideshow-grading.jpg",
                title: "Grading & Excavation",
              },
              {
                url: "/images/slideshow-seeding.jpg",
                title: "Seeding & Sod",
              },
              {
                url: "/images/slideshow-drainage.jpg",
                title: "Drainage",
              },
              {
                url: "/images/slideshow-garden.jpg",
                title: "Garden Bed & Landscape Installations",
              },
              {
                url: "/images/slideshow-paver.jpg",
                title: "Paver Patios & Walkways",
              },
              {
                url: "/images/slideshow-turf.jpg",
                title: "Turf",
              },
            ]}
          ></SlideShow>
        </div>

        <PageTitle title="Dietrich Land Care" />
        <main className="container pb-2">
          <div className={`row ${styles.main_inner_container}`}>
            <div className="col-lg-6" style={{ paddingRight: "30px" }}>
              <Image
                src="/images/regrades.jpg"
                width="500"
                height="300"
                alt="a picture of a backyard renovation using regrading"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  borderRadius: "4px",
                }}
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
                Our professionally trained landscape crew is committed to going
                beyond your expectations and doing everything we can to ensure
                you are proud of your landscape. We provide many different
                landscape services that you can choose from, and we take the
                time to customize them to your individual needs.
              </p>{" "}
              <p>
                {" "}
                We are certified in all areas of landscaping. Our team is able
                to deliver efficient and dependable services that suit your
                budget and needs best. We craft innovative patios, retaining
                walls, rain gardens, walkways, fences and more!
              </p>
            </div>
          </div>
        </main>
        <CTA service="services" />
      </div>
    );
  }
}
