import { PageCartItem } from "./PageCartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../../ReduxFiles/Reduser/CartReducer";
import { PageCartEmpty } from "./PageCartEmpty";
import { RootState } from "../../ReduxFiles/Redux/Store";
import { IProduct } from "../../Data/Products";
import { CartTitle } from "./PageCartStyles";
import { CartUnderline } from "./PageCartStyles";
import { Clear } from "./PageCartStyles";
import { ClearWrapper } from "./PageCartStyles";
import { CartFieldWrapper } from "./PageCartStyles";
import { CartFieldSecondWrapper } from "./PageCartStyles";
import { CartFieldItemsWrapper } from "./PageCartStyles";
import { CartItems } from "./PageCartStyles";
import { TotalCount } from "./PageCartStyles";
import { CartMainWrapper } from "./PageCartStyles";
import { TotalWrapper } from "./PageCartStyles";

export function PageCart() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const totalPrice = items.reduce(
    (sum: number, item: any) => (sum + item.count * item.price),
    0
  );

  const onClickClear = () => {
    if (window.confirm("Вы действительно желаете очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <PageCartEmpty />;
  }

  return (
    <article>
      <CartMainWrapper>
        <CartFieldWrapper>
          <CartTitle>Корзина</CartTitle>
          <CartUnderline />

          <CartFieldSecondWrapper>
            <ClearWrapper onClick={onClickClear}>
              <Clear>Очистить корзину</Clear>
            </ClearWrapper>

            <CartFieldItemsWrapper>
              <CartItems>
                {items.map(function (items: IProduct) {
                  return (
                    <div key={items.id}>
                      <PageCartItem
                        id={items.id}
                        title={items.title}
                        image={items.image}
                        category={items.category}
                        price={items.price}
                        count={items.count}
                      />
                    </div>
                  );
                })}
              </CartItems>
            </CartFieldItemsWrapper>

            <TotalWrapper>
              <TotalCount>Кол-во товаров: {totalCount}шт.</TotalCount>

              <TotalCount>Сумма: {totalPrice}$</TotalCount>
            </TotalWrapper>
          </CartFieldSecondWrapper>
        </CartFieldWrapper>
      </CartMainWrapper>
    </article>
  );
}
