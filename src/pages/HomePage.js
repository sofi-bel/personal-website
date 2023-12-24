import React from "react";
import HeroHeader from "../components/heroHeader/HeroHeader";
import Skill from "../components/skill/Skill";
import { skills } from "../helpers/skillsList";

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
            {skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  text={skill.text}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default HomePage;