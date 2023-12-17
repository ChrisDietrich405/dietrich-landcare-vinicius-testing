import Head from "next/head";

import styles from "../styles/seeding-sod-instructions.module.css";

export default function SeedingSodInstructions() {
  return (
    <>
      <Head>
        <title>Seeding/Sod Instructions | Dietrich Land Care</title>
        <meta
          name="description"
          content="Seeding and sod instructions to help customers maintain lawn"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietrichlandcare.com" />
        <meta property="og:title" content="Dietrich Land Care" />
        <meta
          property="og:description"
          content="Seeding and sod instructions to help customers maintain lawn"
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
      <main>
        <h1 className={styles.title}>
          Instructions for after seeding or sod installation
        </h1>
        <div className={styles.seeding_container}>
          {/* < className={styles.image_wrapper}> */}
          <p>
            Watering needs to begin as soon as installation of your new sod has
            begun. One gallon of water the first hourth ten gallons the next day
          </p>
          <p>
            Water slowly enough to avoid run-off, but long enough to soak
            through the sod pad onto the ground below. This may be monitored by
            peeking under corners of the sod around this area. Pay special
            attention to exposed areas, as these are sometimes missed. These
            edges will also dry out faster so keep an eye on them. The best time
            to water is early morning or late afternoon
          </p>
          <p>
            This manner of watering will need to continue for at least two
            weeks. Frequency of watering will depend entirely upn air
            temperature and rainfall. During this time the area will be very
            soft so it is important to redirect foot traffic(human and pet) away
            from this area
          </p>
          <p>
            After two weeks, begin to lengthen the time between watering. After
            about three weeks, your sod should be rooted and able to fend for
            itself.
          </p>
          <p>
            If your sod is installed in May or later, this area will need to be
            watched during the summer months for signs of drought stress which
            would require extra watering from our distributor.
          </p>

          {/* <p>
            It is very important to properly maintain the seed or sod during its
            germination or mending period. The seed germination for most blended
            grass seed mixes in our area is 5-10 days, this will also be decided
            by the weather, temperature conditions, and soil temperatures. The
            ideal best condition for cool season turf to germinate is when the
            soil temperature is warm (60-65 degrees) and the overall weather
            conditions are 75 degrees and below.
          </p>
          <p>
            Cool season turf typically grows best under these conditions. That
            is why seeding in the fall is the best time of the year. The ground
            temperature is warm from the summer and the temperature during the
            days get warm and then rapidly cool off in the evening. Full
            germination could possibly take up to 5-8 weeks. This will require
            some diligent watering on your part. The most important factor in
            this process is watering. The perfect scenario would be to water the
            seeded or sodded area to the point that it is moist. You do not want
            to water the seeded or sodded area 1 time very heavily. You want to
            water the area 2-3 times per day to get the soil moist.
          </p>
          <p>
            Once the area has begun to puddle stop watering until later and try
            not to water the lawn past 7pm. Having too much moisture on the area
            over night could potentially cause some problems like fungus or
            blight. This schedule should be maintained for 2 full weeks (7 days
            a week). On the 3rd week continue watering but not as frequent,
            maybe 1-2 times per day. You do not need to water if you have a
            steady rain for that specific day. If you do not have your lawn
            fertilized by Dietrich Land Care, and you have it treated by another
            company or you do it yourself do NOT apply any type of fertilizer
            for the first 4 weeks and never apply any kind of broad leaf weed
            control to the lawn for at least 6 weeks. The lawn will have a
            starter fertilizer applied the day the new lawn is installed.
          </p>
          <p>
            The active chemical for cool season turf that treats broad leaf
            weeds is 2-4D. This will retard the growth of the new seedlings and
            cause problems for the growth rate, potentially ruining the freshly
            seeded or sodded lawn. Try to wait as long as possible for the first
            initial cutting, typically 4-6 weeks. For the first cutting make
            sure the lawn mower is set on the highest setting, make sure the
            blades are sharp, and try your best not to turn the mower around on
            the new turf. If you can walk to a sidewalk, driveway, or street do
            so for this initial cutting. The lawn will still be soft from the
            screened topsoil and the heavy amounts of watering that you have
            been doing for past 2-3 weeks. Sometimes this is unavoidable, but
            try your best to not turn the mower around in the newly seeded or
            sodded area. Also try to bag the grass for the first cutting, do not
            leave clumps of grass on the new seed or sod, this will cause
            burning and could potentially kill small areas of the lawn.
          </p>
          <p>
            Please keep in mind that a seeded area anywhere from 1,000 sq. ft. -
            20,000 sq. ft. could take up to 1 entire growing season to reach its
            fullest maturity level. You can expect to find bare spots throughout
            the lawn and sometimes this is normal. Over time the grass will fill
            in. Also you will more than likely have some broad leaf weeds grow.
            This is also normal. Do NOT apply any broad leaf weeded control as
            stated above. If you are re-seeding or sodding in the Fall do not
            worry about the weeds because after the first frost all the annual
            weeds such as crab-grass, dandelions, clover, and oxalis will all
            die. After the lawn is established it is highly recommended to
            incorporate a fertilizer complete with insecticide, weed control and
            lime. Dietrich Land Care provides this service as well. (Check
            our fertilizer page) Please keep in mind seeding a new lawn takes
            time and patience. It requires the work of the contractor and the
            homeowner to receive optimum results.
          </p> */}
        </div>
      </main>
    </>
  );
}
