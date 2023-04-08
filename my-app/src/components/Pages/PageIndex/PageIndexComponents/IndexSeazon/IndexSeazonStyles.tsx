import styled from "styled-components";


export const IndexSceletonMainWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const IndexSceletonSecondWrapper = styled.div`
  display: flex;
  height: 260px;
  width: 140px;
  background-color: #e9e9e9;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 20px 10px;
  position: relative;
`;

export const IndexCircleWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const IndexCircle = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: #b2b2b2;
`;

export const IndexBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IndexSceletonImage = styled.div`
  width: 45px;
  height: 60px;
  background-color: #b2b2b2;
  border-radius: 5px;
`;

export const IndexSceletonLine = styled.div`
  width: 102px;
  height: 18px;
  background-color: #b2b2b2;
  border-radius: 5px;
`;

export const IndexSceletonButton = styled.div`
  width: 102px;
  height: 30px;
  background-color: #b2b2b2;
  border-radius: 5px;
`;