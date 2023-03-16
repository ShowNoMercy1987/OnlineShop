import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { MainButton } from "../../../../PagesComponent/MainButton/MainButton";
import { Link } from "react-router-dom";

export const OldCollections = () => {
  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="40px"
      padding="40px"
    >
      <Span fontSize="36px" color="#ffffff" fontFamily="'PT Sans', sans-serif;">
        КОЛЛЕКЦИЯ 2022 г.
      </Span>
      <Span width="120px" borderBottom="1px solid #ffffff"></Span>
      <Span fontSize="14px" color="#ffffff" fontFamily="'PT Sans', sans-serif;">
        Мужской классический стиль 2022 подчеркивает вкус, элегантность, обаяние
        и положение в обществе человека. Несмотря на кажущуюся простоту и
        однокомпонентность выбора моделей деловых костюмов: неброская верхняя
        одежда, однобортный или двубортный пиджак, брюки, сорочка и туфли в
        классическом стиле, можно всегда выглядеть свежо и модно, скомбинировав
        правильно эти элементы и дополнив их дорогими кашемировыми пальто,
        стильными мужскими аксессуарами, такими как часы. Выбор стрижки также
        немаловажен для бизнесмена. Аккуратные модные стрижки помогут
        расположить к себе партнера по бизнесу.
      </Span>
      <Link className="link" to="/Collection2022">
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
          ПОСМОТРЕТЬ КОЛЛЕКЦИЮ
        </MainButton>
      </Link>
    </FlexWrapper>
  );
};
