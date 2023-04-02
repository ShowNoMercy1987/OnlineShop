import { IndexCatalogCard } from "../PageIndex/PageIndexComponents/IndexCatalog/IndexCatalogCard";
import { IndexCatalogSceleton } from "../PageIndex/PageIndexComponents/IndexCatalog/IndexCatalogSceleton";
import { CatalogMenuTitle } from "./CatalogStyles";
import { MenuUnderline } from "./CatalogStyles";
import { CatalogTitle } from "./CatalogStyles";
import { ErrorMessage } from "./CatalogStyles";
import { CatalogMenuWrapper } from "./CatalogStyles";
import { CatalogWrapper } from "./CatalogStyles";
import { CatalogListWrapper } from "./CatalogStyles";
import { CatalogMainBlock } from "./CatalogStyles";
import { CatalogItemsWrapper } from "./CatalogStyles";
import { useState, useEffect } from "react";
import { IProduct } from "../../Data/Products";
import axios, { AxiosError } from "axios";
import Pagination from "../../Pagination/Pagination";

export const Catalog = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

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

  // useEffect(() => {
  //   // @ts-ignore
  //   setCurrentPage(JSON.parse(localStorage.getItem('page')));
  // }, [])

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const howManyPages = Math.ceil(products.length / productsPerPage);

  return (
    <article>
      <CatalogMainBlock>
        <CatalogMenuWrapper>
          <section>
            <CatalogMenuTitle>Меню</CatalogMenuTitle>
            <MenuUnderline />
          </section>
        </CatalogMenuWrapper>

        <CatalogItemsWrapper>
          <CatalogWrapper>
            <CatalogTitle>Каталог товаров</CatalogTitle>
            <MenuUnderline />

            {loading && (
              <>
                <IndexCatalogSceleton />
                <IndexCatalogSceleton />
              </>
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <section>
              <CatalogListWrapper>
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
              </CatalogListWrapper>
            </section>

            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
          </CatalogWrapper>
        </CatalogItemsWrapper>
      </CatalogMainBlock>
    </article>
  );
};
