import styled from "styled-components";

export const HeaderSubTitleMainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 44px;
  left: 0px;
  right: 0px;
  background-color: #0f0f0f;
  border-bottom: 1px solid #969696;
`;

export const HeaderSubTitleContent = styled.div`
  display: flex;
  width: 1300px;
  margin: auto;
  height: 100%;
  justify-content: space-between;
  background-color: #0f0f0f;
`;

export const HeaderSubTitleLogoWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 104px;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.div`
  display: flex;
  height: 100%;
`;

export const CrumpsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.4s;

  &:hover {
    background: #1f1f1f;
  }
`;

export const HeaderSubTitleCartFind = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.4s;

  &:hover {
    background: #1f1f1f;
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CountNumber = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: -16px;
  right: -16px;
  background-color: #ce1d1d;
  border: 2px solid #000000;
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;
