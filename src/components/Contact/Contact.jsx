import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:rishitha.ganesan@gmail.com">rishitha.ganesan@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
                <a href="https://www.linkedin.com/in/rishitha-ganesan-a1427320b/">linkedin.com/rishitha</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/Rishitha-Ganesan2001">github.com/rishitha</a>
            </li>
        </ul>
    </footer>
  )
}
