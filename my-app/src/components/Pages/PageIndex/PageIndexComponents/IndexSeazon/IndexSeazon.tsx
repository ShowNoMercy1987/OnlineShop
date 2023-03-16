import { FlexWrapper } from "../../../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../../../StyledComponents/Span/Span";
import { useState, useEffect } from "react";
import { IProduct } from "../../../../Data/Products";
import axios, { AxiosError } from "axios";
import { IndexSeazonCard } from "./IndexSeazonCard";


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
        <FlexWrapper flexDirection="column" alignItems="center" gap="50px">
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            СЕЗОН 2021/22
          </Span>

          <Span width="120px" borderBottom="1px solid #ffffff"></Span>

          {loading && (
            <Span
              fontSize="18px"
              color="#ffffff"
              fontFamily="'PT Sans', sans-serif;"
            >
              Загрузка...
            </Span>
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
