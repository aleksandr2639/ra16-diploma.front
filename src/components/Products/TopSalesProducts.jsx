import { useSelector } from "react-redux";
import Preloader from "../Preloader";
import {
  selectTopSales,
  fetchTopSales,
} from "../../redux/TopSalesProductsSlice";
import Card from "../Card";
import { v4 as uuidv4 } from "uuid";

const TopSalesProducts = () => {
  const { topSales, loading, error } = useSelector(selectTopSales);

  return (
    <>
      {loading && <Preloader />}
      {error && (
        <Error
          error={error}
          text={"Ошибка запроса хитов продаж"}
          clossest=".top-sales"
          callback={fetchTopSales}
        />
      )}
      {!loading && (
        <div className="row">
          {topSales.map((item) => (
            <Card key={uuidv4()} {...item} className="" />
          ))}
        </div>
      )}
    </>
  );
};
export default TopSalesProducts;
