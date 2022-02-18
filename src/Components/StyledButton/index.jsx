import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 100px;
  border: 1.5px #3d9b51 solid;
  margin: 10px;
  padding: 6px 10px;
  font-weight: 700;
  background-color: #ffffff;
  color: #3d9b51;
  cursor: pointer;
  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-color: #ffffff;
      color: #000334;
      border: 1px #000334 solid;
    `}
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #b2b9b2;
    `}
  ${({ isCopyLink }) =>
    isCopyLink &&
    css`
      width: 200px;
      align-self: center;
      margin: 60px 0;
      &:hover {
        background-color: #b2b9b2
      }
    `}
`;

export const StyleButton = ({ children, onClick, isSelected, isCopyLink }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <StyledButton      
      onClick={onClick}
      isDarkTheme={isDarkTheme}
      isSelected={isSelected}
      isCopyLink={isCopyLink}
    >
      {children}
    </StyledButton>
  );
};
