import { useForm, SubmitHandler } from "react-hook-form";
import { Span } from "../../StyledComponents/Span/Span";
import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { StyledInput } from "../../StyledComponents/StyledInput/StyledInput";
import { StyledButton } from "../../StyledComponents/StyledButton/StyledButton";
import { Link } from "react-router-dom";

type Inputs = {
  login: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(JSON.stringify(data));
    reset();}

  return (
    <>
      <FlexWrapper gap="30px" flexDirection="column">
        <Span color="#000000" fontSize="28px" textAlign="center">
          Вход на сайт
        </Span>
        <form action="#" onSubmit={handleSubmit(onSubmit)}>
          <FlexWrapper flexDirection="column" width="100%" gap="20px">
            <FlexWrapper flexDirection="column" gap="5px">
              <Span
                fontSize="18px"
                color="#000000"
                fontFamily="'PT Sans', sans-serif;"
              >
                Логин
              </Span>
              <StyledInput
                type="text"
                placeholder="Введите ваш логин (email)"
                padding="5px"
                outline="none"
                focusBorder="#44a0e787"
                {...register("login", {
                  required: "Заполните поле",
                  maxLength: {
                    value: 30,
                    message: "Максимально 16 символов",
                  },
                  pattern: {
                    value: /.+@.+\..+/i,
                    message: "Некорректный логин",
                  },
                })}
              />

              <FlexWrapper position="absolute" top="216px">
                {errors?.login && (
                  <Span fontSize="14px" color="red">
                    {errors?.login?.message || "Некорректный логин"}
                  </Span>
                )}
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper flexDirection="column" gap="5px">
            <Span
                fontSize="18px"
                color="#000000"
                fontFamily="'PT Sans', sans-serif;"
              >
                Пароль
              </Span>
              <StyledInput
                type="password"
                placeholder="Введите пароль"
                padding="5px"
                outline="none"
                focusBorder="#44a0e787"
                {...register("password", { required: true })}
              />
            </FlexWrapper>

            <StyledButton
              type="submit"
              fontSize="18px"
              padding="5px 0"
              borderRadius="2px"
              backgroundColor="#969696"
              hover="#bcbbbb"
              active="#817e7e"
              colorActive="#ffffff"
              transitionDuration="0.4s"
              transitionProperty="background-color"
              disabled={!isValid}
            >
              Войти
            </StyledButton>
            <span>
              <Link className="link" to="/forgot">
                <Span
                  color="#000000"
                  fontSize="16px"
                  hoverColor="#aaaaaa"
                  textDecorationHover="underline"
                  transitionDuration="0.4s"
                  transitionProperty="color"
                >
                  Забыли пароль?
                </Span>
              </Link>{" "}
              |{" "}
              <Link className="link" to="/registration">
                <Span
                  color="#000000"
                  fontSize="16px"
                  hoverColor="#aaaaaa"
                  textDecorationHover="underline"
                  transitionDuration="0.4s"
                  transitionProperty="color"
                >
                  Регистрация
                </Span>
              </Link>
            </span>
          </FlexWrapper>
        </form>
      </FlexWrapper>
    </>
  );
}

export default LoginForm;
