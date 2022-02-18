import { createContext, useState } from "react";

export const StylesContext = createContext();

export const StylesContextProvider = ({ children }) => {

  const [styles, setStyles] = useState({
    gradientType: "linear",
    directionType: "top left",
    colorOne: "#000000",
    colorTwo: "#ffffff",
    outputFormat: "HEX",
  });

  const [rgbColors, setRgbColors] = useState({
    redOne: null,
    greenOne: null,
    blueOne: null,
    redTwo: null,
    greenTwo: null,
    blueBlue: null,
  });

  // Funcion principal de manejo de los estilos
  const handleStyles = (property, value) => {
    setStyles({ ...styles, [property]: value });
  };

  // Funciones para lograr generar dos colores de forma aleatoria (random)
  const getRandomColor = () => {
    const randomGenerator = (min, max) => {
      let scale = max - min;
      let random = Math.floor(Math.random() * scale);
      return parseInt(min) + random;
    };

    const hexadecimalArray = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
      let randomIndex = randomGenerator(0, hexadecimalArray.length);
      randomColor += hexadecimalArray[randomIndex];
    }

    return randomColor;
  };

  const handleRandomColors = () => {
    setStyles({
      ...styles,
      colorOne: getRandomColor(),
      colorTwo: getRandomColor(),
    });
  };

  // Funcion para formatear el color de HEX a RGB
  const handleRgbColor = (hexColorOne, hexColorTwo) => {
    let redOne = parseInt(hexColorOne[1] + hexColorOne[2], 16);
    let greenOne = parseInt(hexColorOne[3] + hexColorOne[4], 16);
    let blueOne = parseInt(hexColorOne[5] + hexColorOne[6], 16);
    let redTwo = parseInt(hexColorTwo[1] + hexColorTwo[2], 16);
    let greenTwo = parseInt(hexColorTwo[3] + hexColorTwo[4], 16);
    let blueTwo = parseInt(hexColorTwo[5] + hexColorTwo[6], 16);

    setRgbColors({ redOne, greenOne, blueOne, redTwo, greenTwo, blueTwo });
  };

  const data = {
    styles,
    handleStyles,
    handleRandomColors,
    handleRgbColor,
    rgbColors,
  };

  return (
    <StylesContext.Provider value={data}>{children}</StylesContext.Provider>
  );
};
