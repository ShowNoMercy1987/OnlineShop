import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { MainButton } from "../../../../PagesComponent/MainButton/MainButton";
import CollectionBlock from "../../../../../images/collection-block.png";
import { Link } from "react-router-dom";

export const IndexCatalog = () => {
  return (
    <>
      <FlexWrapper
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="45%"
        style={{
          backgroundImage: `url(${CollectionBlock})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <FlexWrapper
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="50px"
        >
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            Наши товары
          </Span>
          <Span width="120px" borderBottom="1px solid #ffffff"></Span>
          <Link className="link"  to="/Catalog">
            <MainButton
              color="#ffffff"
              fontSize="18px"
              padding="12px 28px"
              backgroundColor="#ffffff00"
              border="1px solid #ffffff"
              hoverColor="#969696"
              activeColor="#797979"
              hoverBorder="1px solid #969696"
              activeBorder="1px solid #797979"
              transitionDuration="0.4s"
              transitionProperty="color"
            >
              Каталог
            </MainButton>
          </Link>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
