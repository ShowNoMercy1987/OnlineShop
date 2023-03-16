import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";

export const Footer = () => {
  return (
    <>
      <FlexWrapper
        backgroundCcolor="#0F0F0F"
        height="50px"
        width="100%"
        borderTop="1px solid #ffffff"
      >
        <FlexWrapper
          width="1300px"
          margin="auto"
          height="50px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Span color="#969696" fontFamily="'PT Sans', sans-serif;">
            © 2023 Все права защищены
          </Span>
          <Span color="#969696" fontFamily="'PT Sans', sans-serif;">сверстал - Дмитрий Овчинников</Span>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
