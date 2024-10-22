import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import jaylordImage from './jaylord.jpg';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jaylord</h1>
        <p className={styles.description}>
        I’m currently studying at the Western Institute of Technology,  pursuing a Bachelor of Science in Information Technology. 
        I’m passionate about technology and eager to explore how it can be used to solve real-world problems.

        </p>
       
      </div>
      <img
        src = {jaylordImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
