import { useEffect } from "react";
import  {useLocalStorage} from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";
import sunIcon from "../../assets/images/icons/sunIcon.svg";
import moonIcon from "../../assets/images/icons/moonIcon.svg";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('page_theme_dark');
    } else {
      document.body.classList.remove('page_theme_dark');
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn_active';

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img
        src={sunIcon}
        alt="Light mode"
        className="dark-mode-btn__icon"
      />
      <img
        src={moonIcon}
        alt="Dark mode"
        className="dark-mode-btn__icon"
      />
    </button>
  );
};

export default BtnDarkMode;