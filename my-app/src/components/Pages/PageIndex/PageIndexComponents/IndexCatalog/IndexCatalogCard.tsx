import { IProduct } from "../../../../Data/Products";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../ReduxFiles/Reduser/CartReducer";
import { ReactComponent as Heart } from "../../../../../images/heart.svg";
import { useState } from "react";
import {
  ItemMainWrapper,
  SvgWrapper,
  ImgWrapper,
  ContentWrapper,
  ContentSecondWrapper,
  ItemWrapper,
  ItemTitleWrapper,
  Title,
  PriceWrapper,
  PriceTitle,
  Description,
  Category,
  ButtonWrapper,
  AddButton,
} from "./IndexCatalogCartStyles";

export const IndexCatalogCard = ({
  id,
  image,
  title,
  description,
  price,
  category,
}: IProduct) => {
  const [inCart, addedInCart] = useState("Добавить в корзину");
  // const [ size, activedSize ] = useState(0);
  // const [ selectedItem, setSelectedItem ] = useState('')
  const dispatch = useDispatch();

  // const handleSize = (e:any, id:number, value:string) => {
  //   activedSize(id)
  //   setSelectedItem(value)
  // };

  const onClickAdd = () => {
    const item: any = {
      id,
      image,
      title,
      description,
      price,
      category,
      // size: {selectedItem}
    };
    dispatch(addItem(item));
    addedInCart("Товар в корзине +");
  };

  // const itemSize: any = [
  //   { id: 0, size: "XXS" },
  //   { id: 1, size: "XS" },
  //   { id: 2, size: "S" },
  //   { id: 3, size: "M" },
  //   { id: 4, size: "L" },
  //   { id: 5, size: "XL" },
  //   { id: 6, size: "XXL" },
  // ];

  return (
    <ItemMainWrapper>
      <SvgWrapper>
        <Heart className="heart" />
      </SvgWrapper>

      <ImgWrapper>
        <img className="img-about" src={image} alt="img" />
      </ImgWrapper>
      <ContentWrapper>
        <ContentSecondWrapper>
          <ItemWrapper>
            <ItemTitleWrapper>
              <Title>{title}</Title>

              <PriceWrapper>
                <PriceTitle>Цена:</PriceTitle>
                <PriceTitle>{price}$</PriceTitle>
              </PriceWrapper>
            </ItemTitleWrapper>

            <Category>{category}</Category>
            <Description>{description}</Description>
          </ItemWrapper>
          <ButtonWrapper>
            {/* <FlexWrapper alignItems="center" justifyContent="center" gap="10px">
              <Span
                fontSize="22px"
                color="#000000"
                fontFamily="'PT Sans', sans-serif;"
                textDecoration="underline"
              >Размер: </Span>
              {itemSize.map(function (sizes: any) {
                return (
                  <MainButton
                    padding="5px 0px"
                    width="40px"
                    alignItems="center"
                    justifyContent="center"
                    color="#ffffff"
                    backgroundColor="#000000"
                    backgroundColorHover="#434343"
                    border="1px solid #000000"
                    borderRadius="5px"
                    className={size === sizes.id ? "active-btn" : ""}
                    key={sizes.id}
                    onClick={(e) => handleSize(e, sizes.id, sizes.size)}
                  >
                    {sizes.size}
                  </MainButton>
                );
              })}
            </FlexWrapper> */}
            <AddButton onClick={onClickAdd}>{inCart}</AddButton>
          </ButtonWrapper>
        </ContentSecondWrapper>
      </ContentWrapper>
    </ItemMainWrapper>
  );
};
