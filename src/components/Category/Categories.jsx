import Category from "./Category.jsx";
import { useSelector } from "react-redux";
import { selectCategories, fetchCategory } from "../../redux/CategorySlice.jsx";
import Error from "../Error/Error.jsx";

const Categories = ({ categories }) => {
  const { categoriesLoading, categoriesError } = useSelector(selectCategories);

  const newCategories = [{ id: 0, title: "Все" }, ...categories];

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
              newCategories.map((el) => <Category key={el.id} category={el} />)}
        </ul>
      )}
    </>
  );
};

export default Categories;
