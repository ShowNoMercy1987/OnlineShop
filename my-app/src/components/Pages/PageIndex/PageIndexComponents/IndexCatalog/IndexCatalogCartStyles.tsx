import styled from "styled-components";

export const IndexCatalogMainWrapper = styled.div`
display: flex;
align-i tems: center;
justify-content: center;
flex-direction: column;
width: 45%;
`;

export const IndexCatalogSecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const Goods = styled.span`
  font-size: 36px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const Underline = styled.span`
  width: 120px;
  border-bottom: 1px solid #ffffff;
`;

export const Button = styled.button`
  color: #ffffff;
  font-size: 18px;
  padding: 12px 28px;
  background-color: #ffffff00;
  border: 1px solid #ffffff;
  transition-duration: 0.4s;
  transition-property: color;

  &: hover {
    color: #969696;
    border: 1px solid #969696;
  }

  &: active {
    color: #797979;
    border: 1px solid #797979;
  }
`;
