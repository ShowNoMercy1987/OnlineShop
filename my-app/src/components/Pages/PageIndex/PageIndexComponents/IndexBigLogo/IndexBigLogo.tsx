import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import LogoBlock from "../../../../../images/logo_block.png"

export const IndexBigLogo = () => {
  return (
    <>
      <FlexWrapper
        alignItems="center"
        justifyContent="center"
        height="550px"
        width="100%"
        borderBottom="1px solid #ffffff"
        style={{
          backgroundImage: `url(${LogoBlock})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <FlexWrapper
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="30px"
        >
          <FlexWrapper
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="320px"
            width="320px"
            border="4px solid #ffffff"
          >
            <Span
              fontFamily="Post No Bills Jaffna"
              fontSize="64px"
              color="#ffffff"
            >
              PORTEN
            </Span>
            <Span
              color="#ffffff"
              borderBottom="2px solid #ffffff"
              width="58%"
            ></Span>
            <Span
              fontSize="24px"
              color="#ffffff"
              fontFamily="'PT Sans', sans-serif;"
            >
              г. Краснодар
            </Span>
          </FlexWrapper>

          <FlexWrapper maxWidth="730px">
            <Span
              fontFamily="Post No Bills Jaffna"
              fontSize="22px"
              color="#ffffff"
              textAlign="center"
            >
              Амбициозные успешные мужчины знают, что безупречный внешний вид -
              важное подспорье на пути к успеху, а отличный костюм - пропуск в
              мир политики и большого бизнеса. Каждая деталь вашего гардероба,
              oт костюма до запонок - должна работать на достижение ваших целей,
              подчеркивая ваш успех и положение в обществе (с) PORTEN.
            </Span>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
