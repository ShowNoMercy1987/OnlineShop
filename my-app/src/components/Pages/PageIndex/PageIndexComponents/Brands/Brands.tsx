import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { ReactComponent as BrandsImg } from "../../../../../images/brands.svg"

export const Brands = () => {
  return (
    <>
      <FlexWrapper width="100%" height="362px" backgroundCcolor="#070707">
        <FlexWrapper
          flexDirection="column"
          maxWidth="1300px"
          margin="auto"
          alignItems="center"
          justifyContent="center"
          gap="40px"
        >
          <Span fontSize="36px" color="#ffffff" fontFamily="'PT Sans', sans-serif;">Наши бренды</Span>
          <Span width="120px" borderBottom="1px solid #ffffff"></Span>
          <FlexWrapper maxWidth="1140" alignItems="center" justifyContent="space-between" gap="30px">
            <BrandsImg />
            <BrandsImg />
            <BrandsImg />
            <BrandsImg />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
