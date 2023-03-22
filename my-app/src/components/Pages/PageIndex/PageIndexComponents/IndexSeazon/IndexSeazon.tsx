import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { useState, useEffect } from "react";
import { IProduct } from "../../../../Data/Products";
import axios, { AxiosError } from "axios";
import { IndexSeazonCard } from "./IndexSeazonCard";
import { IndexSceletonSeazon } from "./IndexSeazonSceleton";

export const IndexSeazon = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProduct() {
    try {
      setError("");
      setLoading(true);
      const responce = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(responce.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  // const dispatch = useDispatch();

  return (
    <>
      <FlexWrapper width="55%" alignItems="center" justifyContent="center">
        <FlexWrapper flexDirection="column" alignItems="center" gap="50px" height="485px" paddingTop="30px">
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            СЕЗОН 2021/22
          </Span>

          <Span width="120px" borderBottom="1px solid #ffffff"></Span>

          {/* позже сделаю отдельный компонент для скелетонов этого блока, на данный момент рендерится 4 компонента вместо одного */}
          {loading && (
            <>
              <FlexWrapper flexDirection="row" gap="30px" width="650px" height="260px">
                <IndexSceletonSeazon />
                <IndexSceletonSeazon />
                <IndexSceletonSeazon />
                <IndexSceletonSeazon />
              </FlexWrapper>
            </>
          )}

          {error && (
            <Span
              fontSize="18px"
              color="#ffffff"
              fontFamily="'PT Sans', sans-serif;"
            >
              {error}
            </Span>
          )}

          <FlexWrapper gap="30px">
            {products.map(function (product) {
              if (product.category === "men's clothing") {
                return (
                  <IndexSeazonCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                  />
                );
              }
              return false;
            })}
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
