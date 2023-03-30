import { TotalCount } from "./PageCartStyles";
import { EmptyCartMainWrapper } from "./PageCartStyles";
import { EmptyCartSecondWrapper } from "./PageCartStyles";

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
