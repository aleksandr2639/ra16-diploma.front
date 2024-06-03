import Category from "./Category";
import { useSelector } from "react-redux";
import { selectCategories, fetchCategory } from "../redux/CategorySlice";
import Error from "../components/Error/Error";

const Categories = ({ categories }) => {
  const { categoriesLoading, categoriesError } = useSelector(selectCategories);

  return (
    <>
      {!categoriesLoading && (
        <ul className="catalog-categories nav justify-content-center">
          {categoriesError && (
            <Error
              text="Ошибка запроса категорий"
              error={categoriesError}
              clossest=".catalog-categories"
              callback={fetchCategory}
            />
          )}
          {categories &&
            categories.map((el) => <Category key={el.id} category={el} />)}
        </ul>
      )}
    </>
  );
};

export default Categories;
