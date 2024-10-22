import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import thImage from './th.png'
import jaylordImage from "../Hero/jaylord.jpg"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={jaylordImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              
              <p className={styles.description}>
  I am learning to be a frontend developer with a focus on building responsive and optimized sites.
</p>

              
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I am currently learning how to develop efficient and optimized back-end systems and APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I have designed multiple landing pages and created design systems, although I have limited knowledge of UI design.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
