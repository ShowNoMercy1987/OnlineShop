import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";
import { IProduct } from "../../Data/Products";
import { useDispatch } from "react-redux";
import {
  plusItem,
  minusItem,
  removeItem,
} from "../../ReduxFiles/Reduser/CartReducer";
import { MainButton } from "../../PagesComponent/MainButton/MainButton";

export const PageCartItem = ({
  id,
  image,
  title,
  price,
  category,
  count,
}: IProduct) => {
  const coast = Math.round(price * count);
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно желаете удалить товар из корзины?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <>
      <FlexWrapper
        alignItems="centet"
        justifyContent="flex-start"
        height="100%"
        width="100%"
      >
        <FlexWrapper
          padding="10px"
          alignItems="center"
          justifyContent="center"
          width="155px"
        >
          <img className="img-cart" src={image} alt="product" />
        </FlexWrapper>

        <FlexWrapper
          padding="10px"
          alignItems="center"
          justifyContent="center"
          width="600px"
        >
          <Span
            fontSize="20px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            {title}
          </Span>
        </FlexWrapper>

        {/* <FlexWrapper
          padding="10px"
          alignItems="center"
          justifyContent="center"
          border="1px solid #ffffff"
        >
          <Span
            fontSize="20px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            {category}
          </Span>
        </FlexWrapper> */}

        <FlexWrapper padding="10px" alignItems="center" justifyContent="center">
          <FlexWrapper
            padding="10px"
            alignItems="center"
            justifyContent="center"
          >
            <MainButton
              height="20px"
              width="20px"
              fontSize="20px"
              color="#ffffff"
              backgroundColor="#000000"
              fontFamily="'PT Sans', sans-serif;"
              border="1px solid #ffffff"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              className="plus-minus-btn"
              onClick={onClickMinus}
            >
              <Span className="btn_hover" transform="translateY(-2px)">
                -
              </Span>
            </MainButton>
          </FlexWrapper>

          <Span
            fontSize="20px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            Кол-во: {count} шт.
          </Span>

          <FlexWrapper
            padding="10px"
            alignItems="center"
            justifyContent="center"
          >
            <MainButton
              height="20px"
              width="20px"
              fontSize="20px"
              color="#ffffff"
              backgroundColor="#000000"
              fontFamily="'PT Sans', sans-serif;"
              border="1px solid #ffffff"
              borderRadius="50%"
              alignItems="center"
              justifyContent="center"
              className="plus-minus-btn"
              onClick={onClickPlus}
            >
              <Span className="btn_hover">+</Span>
            </MainButton>
          </FlexWrapper>
        </FlexWrapper>

        <FlexWrapper padding="10px" alignItems="center" justifyContent="center">
          <Span
            fontSize="20px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            Цена: {coast}$
          </Span>
        </FlexWrapper>

        <FlexWrapper
          padding="10px"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
        >
          <Span
            fontSize="20px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
            onClick={onClickRemove}
          >
            Удалить
          </Span>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
