import CollectionBlock from "../../../../../images/collection-block.png";
import { Link } from "react-router-dom";
import {
  IndexCatalogMainWrapper,
  IndexCatalogSecondWrapper,
  Goods,
  Underline,
  Button,
} from "./IndexCatalogCartStyles";

export const IndexCatalog = () => {
  return (
    <>
      <IndexCatalogMainWrapper
        style={{
          backgroundImage: `url(${CollectionBlock})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <IndexCatalogSecondWrapper>
          <Goods>Наши товары</Goods>
          <Underline />
          <Link className="link" to="/Catalog">
            <Button>Каталог</Button>
          </Link>
        </IndexCatalogSecondWrapper>
      </IndexCatalogMainWrapper>
    </>
  );
};
