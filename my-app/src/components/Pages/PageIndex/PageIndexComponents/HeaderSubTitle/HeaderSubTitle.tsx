import "../../../../../App.css";
import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { ReactComponent as SubTitleCart } from "../../../../../images/sub_title_cart.svg";
import { ReactComponent as SubTitleSearch } from "../../../../../images/sub_title_search.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../Data/Products";

export const HeaderSubTitle: React.FC = () => {
  const { items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  return (
    <>
      <FlexWrapper
        width="100%"
        height="80px"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="100"
        top="44px"
        left="0px"
        right="0px"
        backgroundCcolor="#0F0F0F"
        borderBottom="1px solid #969696"
      >
        <FlexWrapper
          width="1300px"
          margin="auto"
          height="100%"
          justifyContent="space-between"
          backgroundCcolor="#0F0F0F"
        >
          <FlexWrapper
            height="100%"
            width="104px"
            alignItems="center"
            justifyContent="center"
          >
            <Link className="link" to="/">
              <Span
                fontFamily="Post No Bills Jaffna"
                fontSize="29px"
                color="#ffffff"
              >
                PORTEN
              </Span>
            </Link>
          </FlexWrapper>

          <FlexWrapper>
            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
              transitionProperty="background-color"
              transitionDuration="0.4s"
            >
              <Link className="link" to="/">
                <Span color="#969696" fontSize="14px" className="text_hover">
                  ГЛАВНАЯ
                </Span>
              </Link>
            </FlexWrapper>
            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
              transitionProperty="background-color"
              transitionDuration="0.4s"
            >
              <Link className="link" to="/Catalog">
                <Span color="#969696" fontSize="14px" className="text_hover">
                  КАТАЛОГ
                </Span>
              </Link>
            </FlexWrapper>

            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
              transitionProperty="background-color"
              transitionDuration="0.4s"
            >
              <Span color="#969696" fontSize="14px" className="text_hover">
                ПОНРАВИЛОСЬ
              </Span>
            </FlexWrapper>

            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
              transitionProperty="background-color"
              transitionDuration="0.4s"
            >
              <Span color="#969696" fontSize="14px" className="text_hover">
                ЛИЧНЫЙ КАБИНЕТ
              </Span>
            </FlexWrapper>

            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
              transitionProperty="background-color"
              transitionDuration="0.4s"
            >
              <Span color="#969696" fontSize="14px" className="text_hover">
                НАСТРОЙКИ
              </Span>
            </FlexWrapper>

            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
            >
              <FlexWrapper
                alignItems="center"
                justifyContent="center"
                position="relative"
              >
                {totalCount > 0 && (
                  <FlexWrapper
                    alignItems="flex-end"
                    justifyContent="center"
                    position="absolute"
                    top="-16px"
                    right="-16px"
                    backgroundCcolor="#ce1d1d"
                    border="2px solid #000000"
                    borderRadius="50%"
                    height="24px"
                    width="24px"
                  >
                    <Span color="#ffffff">{totalCount}</Span>
                  </FlexWrapper>
                )}

                <Link className="link" to="/PageCart">
                  <Span color="#969696" fontSize="14px" className="text_hover">
                    <SubTitleCart />
                  </Span>
                </Link>
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper
              className="block_hover"
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="0px 20px"
              hoverBackground="#1F1F1F"
              cursor="pointer"
            >
              <Span color="#969696" fontSize="14px" className="text_hover">
                <SubTitleSearch />
              </Span>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
