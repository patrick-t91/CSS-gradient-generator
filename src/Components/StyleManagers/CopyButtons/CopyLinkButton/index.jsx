import { useContext } from "react";
import { StylesContext } from "../../../../Context/StylesContext";
import { StyleButton } from "../../../StyledButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import "./index.scss";

export const CopyLinkButton = () => {
  const { styles } = useContext(StylesContext);

  let host = document.location.host;

  let searchParams = `/?gt=${styles.gradientType}&dt=${styles.directionType}&c1=${styles.colorOne}&c2=${styles.colorTwo}`;
  searchParams = searchParams.replace(" ", "%20");
  searchParams = searchParams.replaceAll("#", "");

  const copiedAlert = () => {
    Swal.fire("Link con estilos copiado!");
  };

  return (
    <div className="copy-link-container">
      <CopyToClipboard text={host + searchParams}>
        <StyleButton
          isCopyButton={true}
          onClick={() => {
            copiedAlert();
          }}
          style={{ margin: "-30px" }}
        >
          Copia el link con los estilos!
        </StyleButton>
      </CopyToClipboard>
    </div>
  );
};
