import { useSelector } from "react-redux";
import { selectCatalog, fetchCatalog } from "../../redux/CatalogSlice.jsx";
import { selectCategories } from "../../redux/CategorySlice.jsx";
import Error from "../Error/Error.jsx";

const CardList = ({ children }) => {
  const { catalogError, search } = useSelector(selectCatalog);
  const { selected } = useSelector(selectCategories);

  return (
    <div className="row">
      {catalogError && (
        <Error
          callback={() =>
            fetchCatalog({
              categoryId: selected.id,
              q: search,
            })
          }
          clossest=".row"
          text="Ошибка запроса элементов каталога"
          error={catalogError}
        />
      )}
      {children}
    </div>
  );
};

export default CardList;
