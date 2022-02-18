import { useContext } from "react";
import { StylesContext } from "../../../Context/StylesContext";
import { StyleButton } from "../../StyledButton";
import "./index.scss";

export const DirectionManager = () => {
  const { handleStyles, styles } = useContext(StylesContext);

  return (
    <div className="direction-container">
      <h4>Dirección del gradiente</h4>
      <div className="direction-arrows">
        <StyleButton
          isSelected={styles.directionType === 'top left'}
          onClick={() => {
            handleStyles("directionType", "top left");
          }}
        >
          🡼
        </StyleButton>
        <StyleButton
          isSelected={styles.directionType === 'top'}
          onClick={() => {
            handleStyles("directionType", "top");
          }}
        >
          🡹
        </StyleButton>
        <StyleButton
          isSelected={styles.directionType === 'top right'}
          onClick={() => {
            handleStyles("directionType", "top right");
          }}
        >
          🡽
        </StyleButton>

        <StyleButton
          isSelected={styles.directionType === 'left'}
          onClick={() => {
            handleStyles("directionType", "left");
          }}
        >
          🡸
        </StyleButton>
        {styles.gradientType === "linear" ? <div id='invisible'>000000l</div> : (
          <StyleButton
            isSelected={styles.directionType === 'center'}
            onClick={() => {
              handleStyles("directionType", "center");
            }}
          >
            〇
          </StyleButton>
        )}

        <StyleButton
          isSelected={styles.directionType === 'right'}
          onClick={() => {
            handleStyles("directionType", "right");
          }}
        >
          🡺
        </StyleButton>

        <StyleButton
          isSelected={styles.directionType === 'bottom left'}
          onClick={() => {
            handleStyles("directionType", "bottom left");
          }}
        >
          🡿
        </StyleButton>
        <StyleButton
          isSelected={styles.directionType === 'bottom'}
          onClick={() => {
            handleStyles("directionType", "bottom");
          }}
        >
          🡻
        </StyleButton>
        <StyleButton
          isSelected={styles.directionType === 'bottom right'}
          onClick={() => {
            handleStyles("directionType", "bottom right");
          }}
        >
          🡾
        </StyleButton>
      </div>
    </div>
  );
};
