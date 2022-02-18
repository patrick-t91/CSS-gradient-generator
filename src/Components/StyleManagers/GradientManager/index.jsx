import { useContext } from "react";
import { StyleButton } from "../../StyledButton";
import { StylesContext } from "../../../Context/StylesContext";
import "./index.scss";

export const GradientManager = () => {
  const { handleStyles, styles } = useContext(StylesContext);

  return (
    <div className="gradient-container">
      <h4>Tipo de gradiente</h4>
      <div className="gradient-buttons">
        <StyleButton
          isSelected={styles.gradientType === 'linear'}
          onClick={() => {
            handleStyles("gradientType", "linear");
          }}
        >
          Linear
        </StyleButton>
        <StyleButton
          isSelected={styles.gradientType === 'radial'}
          onClick={() => {
            handleStyles("gradientType", "radial");
          }}
        >
          Radial
        </StyleButton>
      </div>
    </div>
  );
};