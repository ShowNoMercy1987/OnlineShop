import LogoBlock from "../../../../../images/logo_block.png";
import { LogoWrapper } from "./IndexLogoStyles";
import { LogoSecondWrapper } from "./IndexLogoStyles";
import { Logo } from "./IndexLogoStyles";
import { NameTitle } from "./IndexLogoStyles";
import { Underline } from "./IndexLogoStyles";
import { City } from "./IndexLogoStyles";
import { SloganWrapper } from "./IndexLogoStyles";
import { Slogan } from "./IndexLogoStyles";

export const IndexBigLogo = () => {
  return (
    <>
      <LogoWrapper
        style={{
          backgroundImage: `url(${LogoBlock})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <LogoSecondWrapper>
          <Logo>
            <NameTitle>PORTEN</NameTitle>
            <Underline />
            <City>г. Краснодар</City>
          </Logo>

          <SloganWrapper>
            <Slogan>
              Амбициозные успешные мужчины знают, что безупречный внешний вид -
              важное подспорье на пути к успеху, а отличный костюм - пропуск в
              мир политики и большого бизнеса. Каждая деталь вашего гардероба,
              oт костюма до запонок - должна работать на достижение ваших целей,
              подчеркивая ваш успех и положение в обществе (с) PORTEN.
            </Slogan>
          </SloganWrapper>
        </LogoSecondWrapper>
      </LogoWrapper>
    </>
  );
};
