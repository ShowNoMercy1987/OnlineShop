import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";
import { IProduct } from "../../Data/Products";
import { useDispatch } from "react-redux";
import {
  CartItemMainWrapper,
  CartItemImgWrapper,
  CartTitleWrapper,
  Title,
  PlusMinusWrapper,
  PlusMinus,
  Count,
  PlusMinusBtn,
  RemoveWrapper,
  Remove,
} from "./PageCartStyles";
import {
  plusItem,
  minusItem,
  removeItem,
} from "../../ReduxFiles/Reduser/CartReducer";

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
      <CartItemMainWrapper>
        <CartItemImgWrapper>
          <img className="img-cart" src={image} alt="product" />
        </CartItemImgWrapper>

        <CartTitleWrapper>
          <Title>{title}</Title>
        </CartTitleWrapper>

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

        <PlusMinusWrapper>
          <PlusMinus>
            <PlusMinusBtn className="plus-minus-btn" onClick={onClickMinus}>
              <Span className="btn_hover" transform="translateY(-2px)">
                -
              </Span>
            </PlusMinusBtn>
          </PlusMinus>

          <Count>Кол-во: {count} шт.</Count>

          <PlusMinus>
            <PlusMinusBtn className="plus-minus-btn" onClick={onClickPlus}>
              <Span className="btn_hover">+</Span>
            </PlusMinusBtn>
          </PlusMinus>
        </PlusMinusWrapper>

        <FlexWrapper padding="10px" alignItems="center" justifyContent="center">
          <Span
            fontSize="20px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            Цена: {coast}$
          </Span>
        </FlexWrapper>

        <RemoveWrapper>
          <Remove onClick={onClickRemove}>Удалить</Remove>
        </RemoveWrapper>
      </CartItemMainWrapper>
    </>
  );
};
