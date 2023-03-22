import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";
import { PageCartItem } from "./PageCartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearItems  } from "../../ReduxFiles/Reduser/CartReducer";
import { PageCartEmpty } from "./PageCartEmpty";
import { RootState } from "../../ReduxFiles/Redux/Store";
import { IProduct } from "../../Data/Products";

export function PageCart() {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch()

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const totalPrice = items.reduce(
    (sum: number, item: any) => Math.round(sum + (item.count * item.price)),
    0
  );

  const onClickClear = () => {
    if(window.confirm("Вы действительно желаете очистить корзину?")) {
    dispatch(clearItems())
    }
  }

if (!totalPrice) {
  return <PageCartEmpty />
}

  return (
    <>
      <FlexWrapper
        minHeight="100vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
        backgroundCcolor="#000000"
      >
        <FlexWrapper
          width="1300px"
          height="100%"
          margin="auto"
          padding="20px"
          paddingTop="150px"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="30px"
        >
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            Корзина
          </Span>
          <Span width="120px" borderBottom="1px solid #ffffff"></Span>

          <FlexWrapper
            width="100%"
            minHeight="380px"
            flexDirection="column"
            alignItems="center"
            // justifyContent="space-between"
            padding="10px"
            border="1px solid #ffffff"
            borderRadius="5px"
          >
            <FlexWrapper
              height="20px"
              width="100%"
              alignItems="center"
              justifyContent="flex-end"
              onClick={onClickClear}
            >
              <Span
                fontSize="20px"
                color="#ffffff"
                fontFamily="'PT Sans', sans-serif;"
                textDecoration="underline"
                hoverColor="#c81717"
                activeColor="#a81313"
                cursor="pointer"
              >
                Очистить корзину
              </Span>
            </FlexWrapper>

            <FlexWrapper
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              minHeight="360px"
            >
              <FlexWrapper
                width="100%"
                height="100%"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                gap="20px"
              >
                {items.map(function (items:IProduct) {
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
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Span
                fontSize="36px"
                color="#ffffff"
                fontFamily="'PT Sans', sans-serif;"
              >
                Кол-во товаров: {totalCount}шт.
              </Span>

              <Span
                fontSize="36px"
                color="#ffffff"
                fontFamily="'PT Sans', sans-serif;"
              >
                Сумма: {totalPrice}$
              </Span>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
}
