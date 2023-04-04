import "../../../../../App.css";
import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { ReactComponent as SubTitleCart } from "../../../../../images/sub_title_cart.svg";
import { ReactComponent as SubTitleSearch } from "../../../../../images/sub_title_search.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../Data/Products";
import { HeaderSubTitleMainWrapper } from "./HeaderSubitleStyles";
import { HeaderSubTitleContent } from "./HeaderSubitleStyles";
import { HeaderSubTitleLogoWrapper } from "./HeaderSubitleStyles";
import { CrumpsWrapper } from "./HeaderSubitleStyles";
import { Nav } from "./HeaderSubitleStyles";
import { HeaderSubTitleCartFind } from "./HeaderSubitleStyles";
import { Count } from "./HeaderSubitleStyles";
import { CountNumber } from "./HeaderSubitleStyles";

export const HeaderSubTitle: React.FC = () => {
  const { items } = useSelector(selectCart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  return (
    <>
      <HeaderSubTitleMainWrapper>
        <HeaderSubTitleContent>
          <HeaderSubTitleLogoWrapper>
            <Link className="link" to="/">
              <Span
                fontFamily="Post No Bills Jaffna"
                fontSize="29px"
                color="#ffffff"
              >
                PORTEN
              </Span>
            </Link>
          </HeaderSubTitleLogoWrapper>

          <nav>
            <Nav>
              <CrumpsWrapper className="block_hover">
                <Link className="link" to="/">
                  <Span color="#969696" fontSize="14px" className="text_hover">
                    ГЛАВНАЯ
                  </Span>
                </Link>
              </CrumpsWrapper>
              <CrumpsWrapper className="block_hover">
                <Link className="link" to="/Catalog">
                  <Span color="#969696" fontSize="14px" className="text_hover">
                    КАТАЛОГ
                  </Span>
                </Link>
              </CrumpsWrapper>

              <CrumpsWrapper className="block_hover">
                <Span color="#969696" fontSize="14px" className="text_hover">
                  ПОНРАВИЛОСЬ
                </Span>
              </CrumpsWrapper>

              <CrumpsWrapper className="block_hover">
                <Span color="#969696" fontSize="14px" className="text_hover">
                  ЛИЧНЫЙ КАБИНЕТ
                </Span>
              </CrumpsWrapper>

              <CrumpsWrapper className="block_hover">
                <Span color="#969696" fontSize="14px" className="text_hover">
                  НАСТРОЙКИ
                </Span>
              </CrumpsWrapper>

              <HeaderSubTitleCartFind className="block_hover">
                <Count>
                  {totalCount > 0 && (
                    <CountNumber>
                      <Span color="#ffffff">{totalCount}</Span>
                    </CountNumber>
                  )}

                  <Link className="link" to="/PageCart">
                    <Span
                      color="#969696"
                      fontSize="14px"
                      className="text_hover"
                    >
                      <SubTitleCart />
                    </Span>
                  </Link>
                </Count>
              </HeaderSubTitleCartFind>

              <HeaderSubTitleCartFind className="block_hover">
                <Span color="#969696" fontSize="14px" className="text_hover">
                  <SubTitleSearch />
                </Span>
              </HeaderSubTitleCartFind>
            </Nav>
          </nav>
        </HeaderSubTitleContent>
      </HeaderSubTitleMainWrapper>
    </>
  );
};
