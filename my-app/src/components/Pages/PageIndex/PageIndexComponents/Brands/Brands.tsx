import { ReactComponent as BrandsImg } from "../../../../../images/brands.svg";
import { MenuUnderline } from "../../../Catalog/CatalogStyles";
import {
  BrandsMainWrapper,
  BrandsContent,
  BrandsTitle,
  BrandsLogos,
} from "./BrandsStyles";

export const Brands = () => {
  return (
    <>
      <BrandsMainWrapper>
        <BrandsContent>
          <BrandsTitle>Наши бренды</BrandsTitle>

          <MenuUnderline />

          <BrandsLogos>
            <BrandsImg />
            <BrandsImg />
            <BrandsImg />
            <BrandsImg />
          </BrandsLogos>
        </BrandsContent>
      </BrandsMainWrapper>
    </>
  );
};
