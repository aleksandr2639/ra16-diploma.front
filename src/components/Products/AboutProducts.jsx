import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectProduct } from "../../redux/ProductSlice.jsx";
import Preloader from "../Preloader.jsx";
import { useEffect } from "react";
import AboutProductsView from "./AboutProductsView.jsx";

const AboutProducts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, productLoading, productError } = useSelector(selectProduct);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [id, dispatch]);

  return (
    <>
      {productLoading && <Preloader />}
      {productError && (
        <Error
          error={productError}
          text="Ошибка запроса информации о товаре"
          clossest=".catalog-item"
          callback={() => fetchProduct(id)}
        />
      )}
      {item && <AboutProductsView {...item} />}
    </>
  );
};

export default AboutProducts;
