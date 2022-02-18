import { useContext } from "react";
import { StylesContext } from "../../Context/StylesContext";
import styled from "styled-components";
import "./index.scss";

export const MainScreen = () => {
  const { styles } = useContext(StylesContext);

  const MainScreenStyles = styled.div`
    background: -webkit-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background: -moz-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background: -o-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background: -ms-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background-repeat: no-repeat;
  `;

  return (
    <MainScreenStyles
      gradientType={styles.gradientType}
      directionType={styles.directionType}
      colorOne={styles.colorOne}
      colorTwo={styles.colorTwo}
      className="MainScreen"
    ></MainScreenStyles>
  );
};
