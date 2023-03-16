import styled from "styled-components";

interface IStyledInput {
  type?: string;
  placeholder?: string;
  id?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  focusBorder?: string;
  outline?: string;
}

export const StyledInput = styled.input<IStyledInput>`
  box-sizing: border-box;
  outline: ${(props) => props.outline};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};

  &:focus {
    border-color: ${(props) => props.focusBorder};
  }
`;
