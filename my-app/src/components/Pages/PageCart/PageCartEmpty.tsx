import {
  TotalCount,
  EmptyCartMainWrapper,
  EmptyCartSecondWrapper,
} from "./PageCartStyles";

export function PageCartEmpty() {
  return (
    <>
      <EmptyCartMainWrapper>
        <EmptyCartSecondWrapper>
          <TotalCount>В корзину не был добавлен ни один товар!</TotalCount>
        </EmptyCartSecondWrapper>
      </EmptyCartMainWrapper>
    </>
  );
}
