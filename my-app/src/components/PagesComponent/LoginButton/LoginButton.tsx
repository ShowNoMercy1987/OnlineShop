import styled from "styled-components";

interface ILoginButton {
  onClick?: () => void;
  children: string;
  transitionDurationHover?: string;
  transitionDurationActive?: string;
  transitionPropertyHover?: string;
  transitionPropertyActive?: string;
}

export const LoginButton = styled.span<ILoginButton>`
  user-select: none;
  font-size: 14px;
  font-weight: 400;
  color: #969696;
  cursor: pointer;



  &:hover {
    color: #aaaaaa;
    transition-duration: ${(props) => props.transitionDurationHover};
    transition-property: ${(props) => props.transitionPropertyHover};
  }

  &:active {
    color: #797979;
    transition-duration: ${(props) => props.transitionDurationActive};
    transition-property: ${(props) => props.transitionPropertyActive};
  }
`;
