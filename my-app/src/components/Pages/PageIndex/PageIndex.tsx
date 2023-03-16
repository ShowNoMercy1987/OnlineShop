import { HeaderSubTitle } from "./PageIndexComponents/HeaderSubTitle/HeaderSubTitle";
import { Brands } from "./PageIndexComponents/Brands/Brands";
import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { IndexCatalog } from "./PageIndexComponents/IndexCatalog/IndexCatalog";
import { IndexBigLogo } from "./PageIndexComponents/IndexBigLogo/IndexBigLogo";
import { IndexSeazon } from "./PageIndexComponents/IndexSeazon/IndexSeazon";
import { OldCollections } from "./PageIndexComponents/OldCollections/OldCollections";
import { IndexNewProducts } from "./PageIndexComponents/IndexNewProducts/IndexNewProducts";
import OldCollectionBlock from "../../../images/old-collection-block.png";

export function PageIndex() {
  return (
    <>
      <HeaderSubTitle />
      <FlexWrapper backgroundCcolor="#0F0F0F">
        <FlexWrapper
          width="1300px"
          margin="auto"
          marginTop="124px"
          flexDirection="column"
        >
          <IndexBigLogo />
          <FlexWrapper height="486px" borderBottom="1px solid #ffffff">
            <IndexSeazon />
            <IndexCatalog />
          </FlexWrapper>

          <FlexWrapper
            width="1300px"
            margin="auto"
            borderBottom="1px solid #ffffff"
          >
            <FlexWrapper
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              width="45%"
              height="400px"
              style={{
                backgroundImage: `url(${OldCollectionBlock})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></FlexWrapper>
            <FlexWrapper
              alignItems="center"
              justifyContent="center"
              width="55%"
              height="400px"
              flexDirection="column"
              gap="40px"
            >
              <OldCollections />
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper alignItems="center" justifyContent="center" width="100%">
            <IndexNewProducts />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
      <Brands />
    </>
  );
}
