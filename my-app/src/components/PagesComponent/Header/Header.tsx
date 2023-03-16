import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { StyledLink } from "../../StyledComponents/Link/Link";
import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../../../images/phone.svg";
import { ReactComponent as Login } from "../../../images/login.svg";
import { LoginButton } from "../LoginButton/LoginButton";
import { LoginModal } from "../LoginModal/LoginModal";
import { Span } from "../../StyledComponents/Span/Span";
import { useState } from "react";
import cn from "classnames";
import "../../../App.css";

export const Header = () => {
  const [modal, setModal] = useState(false);

  function handleClickModalOn() {
    setModal(true);
    document.body.style.overflow = "hidden";
  }

  function handleClickModalOff() {
    setModal(false);
    document.body.style.overflow = "";
  }

  return (
    <>
      <header>
        <FlexWrapper
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top="0px"
          left="0px"
          right="0px"
          zIndex="100"
          height="44px"
          backgroundCcolor="#000000"
          borderBottom="1px solid #969696"
        >
          <FlexWrapper
            alignItems="center"
            justifyContent="space-between"
            width="1300px"
            margin="auto"
            height="44px"
          >
            <FlexWrapper gap="16px">
              <Phone />
              <StyledLink
                children="8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00"
                color="#969696"
                href="tel:88121234567"
                fontFamily="Arial"
                fontStyle="normal"
                fontWeight="400"
                textDecoration="none"
                fontSize="14px"
                colorHover="#aaaaaa"
                colorActive="#797979"
              />
            </FlexWrapper>

            <FlexWrapper
              alignItems="center"
              justifyContent="space-between"
              gap="10px"
              position="relative"
            >
              <Login />
              <LoginButton
                transitionDurationHover="0.2s"
                transitionPropertyHover="color"
                children="Вход"
                onClick={handleClickModalOn}
              />
              <Span
                color="#969696"
                fontSize="14px"
                pointerEvents="none"
                className="textSelection"
              >
                {" "}
                |{" "}
              </Span>
              <Link className="link" to="/registration">
                <Span
                  transitionDuration="0.2s"
                  transitionProperty="color"
                  onClick={handleClickModalOff}
                >
                  Регистрация
                </Span>
              </Link>{" "}
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </header>
      <LoginModal
        setModal={setModal}
        onClickClose={handleClickModalOff}
        className={cn("login_modal", modal ? "modal_On" : "")}
      />
    </>
  );
};
