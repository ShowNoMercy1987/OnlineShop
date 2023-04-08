import { Span } from "../../StyledComponents/Span/Span";
import {
  CollectionWrapper,
  CollectionMainWrapper,
} from "./Collection2022Styles";
import { MenuUnderline } from "../Catalog/CatalogStyles";

export function Collection2022() {
  return (
    <article>
      <CollectionMainWrapper>
        <CollectionWrapper>
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            СТРАНИЦА КОЛЛЕКЦИИ 2022г. НАХОДИТСЯ В РАЗРАБОТКЕ
          </Span>
          <MenuUnderline />
        </CollectionWrapper>
      </CollectionMainWrapper>
    </article>
  );
}
