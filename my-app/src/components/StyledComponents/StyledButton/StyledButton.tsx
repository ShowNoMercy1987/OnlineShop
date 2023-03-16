import styled from "styled-components";

interface IStyledButton {
  padding?: string;
  fontSize: string;
  type?: string;
  backgroundColor?: string;
  hover?: string;
  active?: string;
  color?: string;
  colorActive?: string;
  borderRadius?: string;
  transitionDuration?: string;
  transitionProperty?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: ${(props) => props.hover};
    transition-duration: ${(props) => props.transitionDuration};
    transition-property: ${(props) => props.transitionProperty};
  }

  &:active {
    background-color: ${(props) => props.active};
    color: ${(props) => props.colorActive};
  }
`;