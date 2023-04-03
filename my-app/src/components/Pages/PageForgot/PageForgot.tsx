import { Span } from "../../StyledComponents/Span/Span";
import { ForgotMainWrapper } from "./PageForgotStyles";
import { ForgotContentWrapper } from "./PageForgotStyles";
import { MenuUnderline } from "../Catalog/CatalogStyles";

export function PageForgot() {
  return (
    <>
      <ForgotMainWrapper>
        <ForgotContentWrapper>
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            СТРАНИЦА ВОССТАНОВЛЕНИЯ ПАРОЛЯ НАХОДИТСЯ В РАЗРАБОТКЕ
          </Span>
          <MenuUnderline />
        </ForgotContentWrapper>
      </ForgotMainWrapper>
    </>
  );
}
