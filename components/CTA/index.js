import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const CTA = ({ service }) => {
  return (
    <div className={styles.link_container}>
      <p className={styles.cta_paragraph}>
        Do you want to know more about our {service}?
      </p>
      <Link href="/schedule">
        <a className={styles.link_container}>Contact us today!</a>
      </Link>
    </div>
  );
};

export default CTA;
