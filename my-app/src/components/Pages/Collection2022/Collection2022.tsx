import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";

export function Collection2022() {
  return (
    <>
      <FlexWrapper
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        backgroundCcolor="#000000"
      >
        <FlexWrapper alignItems="center" justifyContent="center" flexDirection="column" gap="30px">
            <Span
              fontSize="36px"
              color="#ffffff"
              fontFamily="'PT Sans', sans-serif;"
            >
              СТРАНИЦА КОЛЛЕКЦИИ 2022г. НАХОДИТСЯ В РАЗРАБОТКЕ
            </Span>
            <Span width="120px" borderBottom="1px solid #ffffff"></Span>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
}
