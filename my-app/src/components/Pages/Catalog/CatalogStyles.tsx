import styled from "styled-components";

export const CatalogMainBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #000000;
  padding-top: 120px;
`;

export const CatalogItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  min-height: 100vh;
  width: 80%;
`;

export const CatalogMenuTitle = styled.span`
  font-size: 36px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const CatalogMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  width: 20%;
  margin-top: 44px;
  padding: 20px;
`;

export const MenuUnderline = styled.span`
  width: 120px;
  border-bottom: 1px solid #ffffff;
`;

export const CatalogTitle = styled.span`
  font-size: 36px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;
export const CatalogWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  margin-top: 44px;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  font-fize: 18px;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
`;

export const CatalogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  width: 100%;
`;
