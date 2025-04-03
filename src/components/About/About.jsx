import React from "react";
import { getImageUrl } from "../../utils";
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me Sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Front-End Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive, interactive and user-friendly websites. I love tranforming designs into functional and user-friendly experiences with clean, efficient code. Excited about new challenges and always eager to learn!</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};
