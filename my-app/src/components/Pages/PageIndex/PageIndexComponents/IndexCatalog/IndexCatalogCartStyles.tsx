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

export const ItemMainWrapper = styled.div`
  display: flex;
  height: 380px;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 20px;
  gap: 50px;
  position: relative;
`;

export const SvgWrapper = styled.div`
  position: absolute;
  top: 27px;
  left: 20px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100%;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  height: 100%;
`;

export const ContentSecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 1100px;
`;

export const ItemTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 26px;
  color: #000000;
  font-family: "PT Sans", sans-serif;
  text-decoration: underline;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const PriceTitle = styled.span`
  font-size: 26px;
  color: #000000;
  font-family: "PT Sans", sans-serif;
`;

export const Category = styled.span`
  font-size: 14px;
  font-family: "PT Sans", sans-serif;
`;

export const Description = styled.span`
  font-size: 18px;
  font-family: "PT Sans", sans-serif;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const AddButton = styled.button`
  color: #ffffff;
  font-size: 26px;
  padding: 15px 25px;
  background-color: #000000;
  border-radius: 5px;
  transition-duration: 0.4s;
  transition-property: color;

  &:hover {
    background-color: #434343;
  }

  &:active {
    background-color: #2f2f2f;
  }
`;