import styled from "styled-components";

interface ISpan {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontFamily?: string;
  hoverColor?: string;
  focusColor?: string;
  activeColor?: string;
  pointerEvents?: string;
  position?: string;
  top?: string;
  right?: string;
  cursor?: string;
  textDecoration?: string;
  textDecorationHover?: string;
  transform?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  borderBottom?: string;
  width?: string;
  textAlign?: string;
  onClickClose?: () => void;
}

export const Span = styled.span<ISpan>`
  user-select: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  cursor: ${(props) => props.cursor};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  pointer-events?: ${(props) => props.pointerEvents};
  text-decoration: ${(props) => props.textDecoration};
  transform: ${(props) => props.transform};
  transition-duration: ${(props) => props.transitionDuration};
  transition-property: ${(props) => props.transitionProperty};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-bottom: ${(props) => props.borderBottom};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};

  &:hover {
    color: ${(props) => props.hoverColor};
    text-decoration: ${(props) => props.textDecorationHover};
  }

  &:focus {
    color: ${(props) => props.focusColor};
  }

  &:active {
    color: ${(props) => props.activeColor};
  }
`;
