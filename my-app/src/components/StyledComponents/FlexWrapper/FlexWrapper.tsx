import styled from "styled-components";

interface IFlexWrapper {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  gap?: string;
  padding?: string;
  paddingTop?: string;
  margin?: string;
  marginTop?: string;
  width?: string;
  maxWidth?: string;
  minHeight?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  zIndex?: string;
  backgroundImage?: string;
  backgroundCcolor?: string;
  height?: string;
  maxHeight?: string;
  border?: string;
  borderBottom?: string;
  borderTop?: string;
  borderRadius?: string;
  hoverBackground?: string;
  cursor?: string;
  textAlign?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  overflow?: string;
}

export const FlexWrapper = styled.div<IFlexWrapper>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex};
  background-image: ${(props) => props.backgroundImage};
  background-color: ${(props) => props.backgroundCcolor};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  text-align?: ${(props) => props.textAlign};
  transition-duration: ${(props) => props.transitionDuration};
  transition-property: ${(props) => props.transitionProperty};
  overflow: ${(props) => props.overflow};


  &:hover {
    background-color: ${(props) => props.hoverBackground};
    color: ${(p) => p.hoverColor};
    border-color: ${(p) => p.hoverBorderColor};
  }
`;
