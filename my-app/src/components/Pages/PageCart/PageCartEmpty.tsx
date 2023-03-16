import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";

export function PageCartEmpty() {
  return (
    <>
      <FlexWrapper
        alignItems="centet"
        justifyContent="center"
        height="100vh"
        width="100%"
        backgroundCcolor="#000000"
      >
        <FlexWrapper
          width="1300px"
          height="100%"
          margin="auto"
          padding="20px"
          paddingTop="150px"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="30px"
        >
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            В корзину не был добавлен ни один товар!
          </Span>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
}
