import { useContext } from "react";
import { StylesContext } from "../../../Context/StylesContext";
import { StyleButton } from "../../StyledButton";
import "./index.scss";

export const FormatManager = () => {
  const { handleStyles, styles, handleRgbColor } = useContext(StylesContext);

  return (
    <div className="format-container">
      <h4>Tipo de formato del color</h4>
      <div className="format-buttons">
        <StyleButton
          isSelected={styles.outputFormat === "HEX"}
          onClick={() => {
            handleStyles("outputFormat", "HEX");
          }}
        >
          Hex
        </StyleButton>
        <StyleButton
          isSelected={styles.outputFormat === "RGB"}
          onClick={() => {
            handleStyles("outputFormat", "RGB");
            handleRgbColor(styles.colorOne, styles.colorTwo)
          }}
        >
          Rgb
        </StyleButton>
      </div>
    </div>
  );
};
