import React, { Component } from "react";
import css from "./home.module.css";
import { Link } from "react-router-dom";
import picture from "./linkedin-letters.png";
import picture2 from "./twitter-logo-on-black-background.png";
import picture3 from "./github-sign.png";
import picture4 from "./gmail.png";

class Home extends Component {
  render() {
    return (
      <div className={css.mainContainer}>
        <div className={css.columnLeft}>
          <h1 className={css.title}>Alexandra Nicolau</h1>
          <p>
            Newly qualified junior full-stack developer, I have completed a 16
            week intensive software development bootcamp at the School of Code
            where I had the opportunity to learn and use:
          </p>
          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className={css.columnRight}>
          <div className={css.projects}>
            <Link className={css.projectsLink} to="/projects/">
              Projects >>
            </Link>
          </div>

          <div className={css.contactInfo}>
            <div className={css.contactLink}>
              <p className={css.contact}>Contact</p>
              <div className={css.icons}>
                <a href="www.linkedin.com/in/alexandra-nicolau-67b18778">
                  <img src={picture} className={css.pic1} />
                </a>
                <a href="https://twitter.com/Alexand36653009">
                  <img src={picture2} className={css.pic2} />
                </a>
                <a href="https://github.com/AlexandraNicolau">
                  <img src={picture3} className={css.pic3} />
                </a>
                <a href="mailto:alexandra.tnicolau@gmail.com">
                  <img src={picture4} className={css.pic4} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
