import styled from "styled-components";

interface IMainButton {
  height?: string;
  width?: string;
  color?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  activeColor?: string;
  fontFamily?: string;
  fontSize?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  hoverBorder?: string;
  activeBorder?: string;
  alignItems?: string;
  justifyContent?: string;
  transitionDuration?: string;
  transitionProperty?: string;
}

export const MainButton = styled.button<IMainButton>`
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  color: ${(p) => p.color};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  background-color: ${(p) => p.backgroundColor};
  font-family: ${(p) => p.fontFamily};
  font-size: ${(p) => p.fontSize};
  padding: ${(p) => p.padding};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.borderRadius};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};

  &:hover {
    color: ${(p) => p.hoverColor};
    border-color: ${(p) => p.hoverBorderColor};
    background-color: ${(p) => p.backgroundColorHover};
    border: ${(p) => p.hoverBorder};
    transition-duration: ${(props) => props.transitionDuration};
    transition-property: ${(props) => props.transitionProperty};
  }

  &:active {
    color: ${(p) => p.activeColor};
    background-color: ${(p) => p.backgroundColorActive};
    border: ${(p) => p.activeBorder};
  }
`;
