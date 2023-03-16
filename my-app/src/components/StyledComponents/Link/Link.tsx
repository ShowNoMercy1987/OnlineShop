import styled from "styled-components";

interface ILink {
  color: string;
  href: string;
  target?: string;
  fontSize?: string;
  children: string;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  textDecoration?: string;
  colorHover?: string;
  colorFocus?: string;
  colorActive?: string;
}

export const StyledLink = styled.a<ILink>`
  user-select: none;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  text-decoration: ${(props) => props.textDecoration};

  &:hover {
    color: ${(props) => props.colorHover};
  }

  &:focus {
    color: ${(props) => props.colorFocus};
  }

  &:active {
    color: ${(props) => props.colorActive};
  }
`;
