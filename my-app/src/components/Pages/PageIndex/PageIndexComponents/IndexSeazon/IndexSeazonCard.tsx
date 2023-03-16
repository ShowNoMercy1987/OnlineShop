import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { MainButton } from "../../../../PagesComponent/MainButton/MainButton";
import { ReactComponent as Heart } from "../../../../../images/heart.svg";
import { ISeazon } from "../../../../Data/Products";

export const IndexSeazonCard = ({id, image, title}:ISeazon) => {
  return (
    <FlexWrapper gap="30px" key={id}>
      <FlexWrapper
        height="260px"
        width="140px"
        backgroundCcolor="#e9e9e9"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="5px"
        padding="20px 10px"
        position="relative"
        key={id}
      >
        <FlexWrapper position="absolute" top="5px" right="5px">
          <Heart />
        </FlexWrapper>

        <FlexWrapper
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <img className="img" src={image} alt="img" />
          <Span
            fontSize="18px"
            color="#000000"
            fontFamily="'PT Sans', sans-serif;"
            textAlign="center"
          >
            {title}
          </Span>
        </FlexWrapper>
        <MainButton
          color="#000000"
          fontSize="14px"
          padding="6px 14px"
          backgroundColor="#ffffff00"
          border="1px solid #000000"
          hoverColor="#969696"
          activeColor="#797979"
          hoverBorder="1px solid #969696"
          activeBorder="1px solid #797979"
          transitionDuration="0.4s"
          transitionProperty="color"
        >
          Подробнее
        </MainButton>
      </FlexWrapper>
    </FlexWrapper>
  );
};
