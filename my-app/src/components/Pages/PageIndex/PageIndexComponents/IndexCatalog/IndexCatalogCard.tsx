import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { MainButton } from "../../../../PagesComponent/MainButton/MainButton";
import { IProduct } from "../../../../Data/Products";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../ReduxFiles/Reduser/CartReducer";
import { ReactComponent as Heart } from "../../../../../images/heart.svg";
import { useState } from "react";

export const IndexCatalogCard = ({
  id,
  image,
  title,
  description,
  price,
  category,
}: IProduct) => {
  const [ inCart, addedInCart ] = useState("Добавить в корзину");
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
    <FlexWrapper
      height="380px"
      width="100%"
      backgroundCcolor="#ffffff"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="5px"
      padding="20px"
      gap="50px"
      position="relative"
    >
      <FlexWrapper position="absolute" top="27px" left="20px">
        <Heart className="heart" />
      </FlexWrapper>

      <FlexWrapper
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img className="img-about" src={image} alt="img" />
      </FlexWrapper>
      <FlexWrapper height="100%">
        <FlexWrapper
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <FlexWrapper
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
          >
            <FlexWrapper justifyContent="space-between" width="100%">
              <Span
                fontSize="26px"
                color="#000000"
                fontFamily="'PT Sans', sans-serif;"
                textDecoration="underline"
              >
                {title}
              </Span>

              <FlexWrapper gap="10px" alignItems="center">
                <Span
                  fontSize="26px"
                  color="#000000"
                  fontFamily="'PT Sans', sans-serif;"
                >
                  Цена:
                </Span>
                <Span fontSize="26px" fontFamily="'PT Sans', sans-serif;">
                  {price}$
                </Span>
              </FlexWrapper>
            </FlexWrapper>

            <Span
              fontSize="14px"
              color="#000000"
              fontFamily="'PT Sans', sans-serif;"
            >
              {category}
            </Span>
            <Span
              fontSize="18px"
              color="#000000"
              fontFamily="'PT Sans', sans-serif;"
            >
              {description}
            </Span>
          </FlexWrapper>
          <FlexWrapper justifyContent="flex-end" width="100%">
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
            <MainButton
              color="#ffffff"
              fontSize="26px"
              padding="15px 25px"
              backgroundColor="#000000"
              backgroundColorActive="#2f2f2f"
              backgroundColorHover="#434343"
              borderRadius="5px"
              transitionDuration="0.4s"
              transitionProperty="color"
              onClick={onClickAdd}
            >
              {inCart}
            </MainButton>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
