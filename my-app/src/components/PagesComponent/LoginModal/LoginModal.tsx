import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";
import { FC } from "react";
import LoginForm from "./loginForm";
import { useEffect, useRef } from "react";

interface ILoginModal {
  className?: string;
  onClickClose?: () => void;
  setModal?: any;
}

export const LoginModal: FC<ILoginModal> = ({
  className,
  onClickClose,
  setModal,
}) => {

  const useClickOutside:any = (handler:any) => {
    let menuRef:any = useRef<HTMLDivElement>();
  
    useEffect(() => {
      const newHandler = (event:any) => {
        if (!menuRef.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", newHandler);
  
      return () => {
        document.removeEventListener("mousedown", newHandler);
      };
    });
  
    return menuRef;
  };

  let menuRef = useClickOutside(() => {
    setModal(false);
    document.body.style.overflow = "";
  });

  return (
    <>
      <FlexWrapper
        className={className}
        zIndex="150"
        height="100%"
        width="100%"
        backgroundCcolor="#7c7c7ca6"
        position="absolute"
        top="0px"
        right="0px"
        alignItems="center"
        justifyContent="center"
      >
        <FlexWrapper
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          padding="15px"
          border="1px solid #000000"
          borderRadius="5px"
          height="500px"
          width="400px"
          backgroundCcolor="#ffffff"
          position="absolute"
          ref={menuRef}
        >
          <Span
            color="#000000"
            fontSize="14px"
            position="absolute"
            top="15px"
            right="15px"
            cursor="pointer"
            textDecorationHover="underline"
            onClick={onClickClose}
          >
            Закрыть
          </Span>
          <FlexWrapper>
            <LoginForm />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
