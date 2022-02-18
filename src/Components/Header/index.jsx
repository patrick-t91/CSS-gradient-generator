import { useContext } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../../Context/ThemeContext";
import "./index.scss";

export const Header = () => {
  const { isDarkTheme, handleTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <h2>GENERADOR DE GRADIENTE CSS</h2>
      {isDarkTheme ? (
        <div className="lightIcon" onClick={handleTheme}>
          <MdOutlineLightMode className="lightIcon" onClick={handleTheme} />
        </div>
      ) : (
        <div className="darkIcon" onClick={() => handleTheme()}>
          <MdDarkMode className="darkIcon" onClick={handleTheme} />
        </div>
      )}
    </div>
  );
};
