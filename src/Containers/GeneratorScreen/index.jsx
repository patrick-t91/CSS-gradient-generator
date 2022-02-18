import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext/";
import styled, { css } from "styled-components";
import './index.scss'
const GeneratorScreenStyled = styled.div`
  background-color: #ffffff;
  color: #3d9b51;
  display: flex;
  flex-direction: column;
  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-color: #000334;
      color: #eeeeff;
    `}
`;

export const GeneratorScreen = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <GeneratorScreenStyled isDarkTheme={isDarkTheme} className='GeneratorScreen'>
      {children}
    </GeneratorScreenStyled>
  );
};
