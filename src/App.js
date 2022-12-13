import { useEffect, useState } from "react";
import useHandleDataInAPI from "./Hooks/useHandleDataInAPI";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFilterData from "./Hooks/useFilterData";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MyContext } from "./Context/MyContext";
import IndexPage from "./Components/Pages/IndexPage/IndexPage";
import DetailsPage from "./Components/Pages/DetailsPage/DetailsPage";
import ProductsPage from "./Components/Pages/ProductsPage/ProductsPage";
import { config } from "./utils";
import axios from "axios";

function App() {
  /* Data */
  const limit = 5;
  const [listCar, loading, pageCount] = useHandleDataInAPI(5);
  /*  */

  /* product Carousel */
  const [activeTab, setActiveTab] = useState("tab1");
  /*  */

  /* Handle click product => goto detail page */
  const navigate = useNavigate();
  const handleLinkDetail = (product) => {
    navigate(`products/${product.id}`);
  };
  /*  */

  const [cart, setCart] = useState(
    localStorage.getItem("cartList")
      ? JSON.parse(localStorage.getItem("cartList"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cart));
  });

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,

        loading,
        listCar,

        activeTab,
        setActiveTab,

        handleLinkDetail,

        limit,
        pageCount
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <IndexPage/>
          }
        />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage list={listCar} />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
