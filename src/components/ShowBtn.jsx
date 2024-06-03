import { useDispatch, useSelector } from "react-redux";
import { selectCatalog, fetchMore } from "../redux/CatalogSlice";
import { selectCategories } from "../redux/CategorySlice";
import Error from "../components/Error/Error";
import Preloader from "./Preloader";

const ShowBtn = () => {
  const { selected } = useSelector(selectCategories);
  const {
    items,
    moreVisible,
    moreError,
    moreLoading,
    catalogError,
    catalogLoading,
    search,
  } = useSelector(selectCatalog);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      fetchMore({
        categoryId: selected.id,
        offset: items.length,
        q: search,
      })
    );
  };

  return (
    <div className="text-center">
      {moreError && (
        <Error
          error={moreError}
          text={"Ошибка при попытке загрузить ещё"}
          clossest=".text-center"
          callback={() =>
            fetchMore({
              categoryId: selected.id,
              offset: items.length,
              q: search,
            })
          }
        />
      )}
      {moreLoading && !moreError && <Preloader />}
      {items.length === 0 &&
        !catalogError &&
        !catalogLoading &&
        !moreLoading && (
          <div style={{ fontSize: "1.2rem" }}>Ничего не нашлось...</div>
        )}
      {moreVisible && items.length >= 6 && (
        <button onClick={handleClick} className="btn btn-outline-primary">
          Загрузить ещё
        </button>
      )}
    </div>
  );
};

export default ShowBtn;
