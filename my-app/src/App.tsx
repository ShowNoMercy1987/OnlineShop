import { Routes, Route, HashRouter } from "react-router-dom";
import { PageIndex } from "./components/Pages/PageIndex/PageIndex";
import { PageNotFound } from "./components/Pages/PageNotFound/PageNorFound";
import { PageCatalog } from "./components/Pages/PageCatalog/PageCatalog";
import { PageRegistration } from "./components/Pages/PageRegistration/PageRegistration";
import { Collection2022 } from "./components/Pages/Collection2022/Collection2022";
import { Header } from "./components/PagesComponent/Header/Header";
import { HeaderSubTitle } from "./components/Pages/PageIndex/PageIndexComponents/HeaderSubTitle/HeaderSubTitle";
import { Footer } from "./components/PagesComponent/Footer/Footer";
import { Catalog } from "./components/Pages/Catalog/Catalog";
import { PageForgot } from "./components/Pages/PageForgot/PageForgot";
import { PageCart } from "./components/Pages/PageCart/PageCart";
import { PageCartEmpty } from "./components/Pages/PageCart/PageCartEmpty";

function App() {
  return (
    <HashRouter>
      <Header />
      <HeaderSubTitle />
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/product" element={<PageCatalog />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/registration" element={<PageRegistration />} />
        <Route path="/forgot" element={<PageForgot />} />
        <Route path="/collection2022" element={<Collection2022 />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/PageCart" element={<PageCart />} />
        <Route path="/PageCartEmpty" element={<PageCartEmpty />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
