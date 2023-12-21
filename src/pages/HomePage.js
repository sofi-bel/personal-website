import React from "react";
import HeroHeader from "../components/heroHeader/HeroHeader";

const HomePage = () => {
  return (
    <main className="content">
      <HeroHeader />
      <section className="skills section" id="skills">
        <div className="container">
          <h2 className="section__title title title_size_xl title_accent">
            Skills
          </h2>
          <ul className="skill-list">
            <li className="skill-list__item">HTML</li>
            <li className="skill-list__item">CSS</li>
            <li className="skill-list__item">JavaScript</li>
            <li className="skill-list__item">Pug</li>
            <li className="skill-list__item">Handlebars</li>
            <li className="skill-list__item">SASS/SCSS</li>
            <li className="skill-list__item">React</li>
            <li className="skill-list__item">TypeScript</li>
            <li className="skill-list__item">NPM</li>
            <li className="skill-list__item">Yarn</li>
            <li className="skill-list__item">Bootstrap</li>
            <li className="skill-list__item">PostCSS</li>
            <li className="skill-list__item">Gitlab</li>
            <li className="skill-list__item">GitHub</li>
            <li className="skill-list__item">Wepbpack</li>
            <li className="skill-list__item">Vite</li>
            <li className="skill-list__item">ESlint</li>
            <li className="skill-list__item">Prettier</li>
            <li className="skill-list__item">Stylelint</li>
            <li className="skill-list__item">Vercel</li>
            <li className="skill-list__item">Netlify</li>
            <li className="skill-list__item">Docker</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default HomePage;