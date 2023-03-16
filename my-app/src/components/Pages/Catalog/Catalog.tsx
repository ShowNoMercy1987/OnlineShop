import { FlexWrapper } from "../../StyledComponents/FlexWrapper/FlexWrapper";
import { Span } from "../../StyledComponents/Span/Span";
import { IndexCatalogCard } from "../PageIndex/PageIndexComponents/IndexCatalog/IndexCatalogCard";
import { useState, useEffect } from "react";
import { IProduct } from "../../Data/Products";
import axios, { AxiosError } from "axios";
import Pagination from "../../Pagination/Pagination";

export const Catalog = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage , setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2)
  
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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const howManyPages = Math.ceil(products.length/productsPerPage);


  return (
    <>
      <FlexWrapper
        alignItems="flex-start"
        justifyContent="space-between"
        backgroundCcolor="#000000"
        paddingTop="120px"
      >
        <FlexWrapper
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="30px"
          height="100%"
          width="20%"
          marginTop="44px"
          padding="20px"
        >
          <Span
            fontSize="36px"
            color="#ffffff"
            fontFamily="'PT Sans', sans-serif;"
          >
            Меню
          </Span>
          <Span width="120px" borderBottom="1px solid #ffffff"></Span>
        </FlexWrapper>

        <FlexWrapper
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="30px"
          height="100%"
          minHeight="100vh"
          width="80%"
        >
          <FlexWrapper
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="30px"
            padding="20px"
            marginTop="44px"
            width="100%"
          >
            <Span
              fontSize="36px"
              color="#ffffff"
              fontFamily="'PT Sans', sans-serif;"
            >
              Каталог товаров
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

            <FlexWrapper
              gap="30px"
              flexDirection="column"
              height="100%"
              width="100%"
            >
              {currentProducts.map(function (product) {
                return (
                  <div key={product.id}>
                    <IndexCatalogCard
                      id={product.id}
                      title={product.title}
                      image={product.image}
                      rating={product.rating}
                      description={product.description}
                      price={product.price}
                      category={product.category}
                    />
                  </div>
                );
              })}
            </FlexWrapper>

              <FlexWrapper>
                <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage} />
              </FlexWrapper>

          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
};
