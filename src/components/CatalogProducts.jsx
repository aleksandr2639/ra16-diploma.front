import Card from "./Card";
import CardList from "./CardList";
import Categories from "./Categories";
import ShowBtn from "./ShowBtn";
import Preloader from "./Preloader";
import { useEffect } from "react";
import { selectCategories, fetchCategory } from "../redux/CategorySlice";
import { selectCatalog, fetchCatalog } from "../redux/CatalogSlice";
import { useDispatch, useSelector } from "react-redux";

const CatalogProducts = ({ children }) => {
  const { categories, categoriesLoading, selected } =
    useSelector(selectCategories);
  const { items, catalogLoading, catalogError, search } =
    useSelector(selectCatalog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(
      fetchCatalog({
        categoryId: selected.id,
        q: search,
      })
    );
  }, []);

  const catalogHeader = () => (
    <>
      {children}
      <Categories categories={categories} />
      {(catalogLoading || categoriesLoading) && <Preloader />}
    </>
  );

  const homePageCatalogHeader = () => (
    <>
      {catalogLoading || categoriesLoading ? (
        <Preloader />
      ) : (
        <Categories categories={categories} />
      )}
    </>
  );

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {children ? catalogHeader() : homePageCatalogHeader()}
      <CardList>
        {!catalogError &&
          items.length !== 0 &&
          items.map((el) => (
            <Card key={el.id} {...el} classname="catalog-item-card" />
          ))}
      </CardList>
      {!catalogError && <ShowBtn />}
    </section>
  );
};

export default CatalogProducts;
