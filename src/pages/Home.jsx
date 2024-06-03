import TopSalesProducts from "../components/Products/TopSalesProducts";
import CatalogProducts from "../components/CatalogProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTopSales } from "../redux//TopSalesProductsSlice";
import { resetForm } from "../redux/CatalogSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSales());
    dispatch(resetForm());
  }, [dispatch]);

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <TopSalesProducts />
      </section>
      <CatalogProducts>{null}</CatalogProducts>
    </>
  );
};

export default Home;
