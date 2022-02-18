import { useContext } from "react";
import { StylesContext } from "../../../Context/StylesContext";
import { StyleButton } from "../../StyledButton";
import styled from "styled-components";
import "./index.scss";

const StyledInput = styled.input.attrs({
  type: "color",
})`
  background-color: ${({ color }) => color};
  margin: 10px;
`;

export const ColorManager = () => {
  const { styles, handleStyles, handleRandomColors } = useContext(StylesContext);

  return (
    <div className="color-container">
      <h4>Colores del gradiente</h4>
      <div className="color-buttons">
        <StyledInput
          color={styles.colorOne}
          value={styles.colorOne}
          onChange={(e) => {
            handleStyles("colorOne", e.target.value);
          }}
        />
        <StyledInput
          color={styles.colorTwo}
          value={styles.colorTwo}
          onChange={(e) => {
            handleStyles("colorTwo", e.target.value);
          }}
        />
        <div></div>
        <StyleButton
          onClick={() => {
            handleRandomColors()
          }}
        >
          Random
        </StyleButton>
      </div>
    </div>
  );
};
