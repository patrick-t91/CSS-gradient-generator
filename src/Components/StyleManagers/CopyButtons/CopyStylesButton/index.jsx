import { useContext } from "react";
import { StylesContext } from "../../../../Context/StylesContext";
import { StyleButton } from "../../../StyledButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import "./index.scss";

export const CopyStylesButton = () => {
  const { styles, rgbColors } = useContext(StylesContext);

  const HEXstyles = `background: -webkit-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background: -moz-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background: -o-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background: -ms-${styles.gradientType}-gradient(${styles.directionType}, ${styles.colorOne}, ${styles.colorTwo});
    background-repeat: no-repeat;`;

  const RGBstyles = `background: -webkit-${styles.gradientType}-gradient(${styles.directionType}, rgb(${rgbColors.redOne}, ${rgbColors.greenOne}, ${rgbColors.blueOne}), rgb(${rgbColors.redTwo}, ${rgbColors.greenTwo}, ${rgbColors.blueTwo}));
    background: -moz-${styles.gradientType}-gradient(${styles.directionType}, rgb(${rgbColors.redOne}, ${rgbColors.greenOne}, ${rgbColors.blueOne}), rgb(${rgbColors.redTwo}, ${rgbColors.greenTwo}, ${rgbColors.blueTwo}));
    background: -o-${styles.gradientType}-gradient(${styles.directionType}, rgb(${rgbColors.redOne}, ${rgbColors.greenOne}, ${rgbColors.blueOne}), rgb(${rgbColors.redTwo}, ${rgbColors.greenTwo}, ${rgbColors.blueTwo}));
    background: -ms-${styles.gradientType}-gradient(${styles.directionType}, rgb(${rgbColors.redOne}, ${rgbColors.greenOne}, ${rgbColors.blueOne}), rgb(${rgbColors.redTwo}, ${rgbColors.greenTwo}, ${rgbColors.blueTwo}));
    background-repeat: no-repeat;`;

  const copiedAlert = () => {
    Swal.fire("Estilos CSS copiados!");
  };

  return (
    <CopyToClipboard text={styles.outputFormat === 'HEX' ? HEXstyles : RGBstyles}>
      <StyleButton
        isCopyLink={true}
        onClick={() => {
          copiedAlert();
        }}
      >
        Copia los estilos CSS!
      </StyleButton>
    </CopyToClipboard>
  );
};
