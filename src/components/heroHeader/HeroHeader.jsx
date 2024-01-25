import Btn from "../btn/Btn.jsx";
import "./style.scss";

const HeroHeader = () => {
  return (
    <header className="hero-header">
      <div className="hero-header__wrapper">
        <h1 className="hero-header__title title title_size_xxl">
          Hi,&nbsp;I&apos;m&nbsp;Sofi&nbsp;Bel.
        </h1>
        <h2
          className="
        hero-header__title hero-header__title_typing title title_accent"
        >
          Frontend Developer
        </h2>
        <Btn
          link="https://hh.ru/resume/3c29fb55ff0bdfe6c30039ed1f534445353343"
          text="Download CV"
        />
      </div>
    </header>
  );
};

export default HeroHeader;
