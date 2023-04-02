import styled from "styled-components";

export const CartMainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;

export const CartFieldWrapper = styled.div`
  display: flex;
  width: 1300px;
  height: 100%;
  margin: auto;
  padding: 20px;
  padding-top: 150px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const CartFieldSecondWrapper = styled.div`
  width: 100%;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;

export const CartFieldItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 360px;
`;

export const CartItems = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start:
gap: 20px;
`;

export const CartTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 600px;
`;

export const CartTitle = styled.span`
  font-size: 36px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const Title = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const CartUnderline = styled.span`
  width: 120px;
  border-bottom: 1px solid #ffffff;
`;

export const PlusMinusWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const PlusMinus = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const PlusMinusBtn = styled.button`
  display: flex;
  height: 20px;
  width: 20px;
  font-size: 20px;
  color: #ffffff;
  background-color: #000000;
  font-family: "PT Sans", sans-serif;
  border: 1px solid #ffffff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const ClearWrapper = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const Clear = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #c81717;
  }

  &:active {
    color: #a81313;
  }
`;

export const TotalCount = styled.span`
  font-size: 36px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const EmptyCartMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #000000;
`;

export const EmptyCartSecondWrapper = styled.div`
  width: 1300px;
  height: 100%;
  margin: auto;
  padding: 20px;
  padding-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const CartItemMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const CartItemImgWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 155px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const RemoveWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const Remove = styled.span`
  font-size: 20px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;

  &:hover {
    color: #c81717;
  }

  &:active {
    color: #a81313;
  }
`;