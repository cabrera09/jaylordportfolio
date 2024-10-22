import React from "react";
import styles from "./ProjectCard.module.css";
import todoImage from './todo.jpg';

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
   <img src={todoImage}alt={title} className={styles.projectImage} />
   <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {demo && (
              <a
                href="https://awesometodo-yxcl.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Demo
              </a>
            )}
            {source && (
              <a
                href="https://github.com/cabrera09/awesometodo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Source
              </a>
            )}
          </div>
        </div>
   </div>
  );
};
