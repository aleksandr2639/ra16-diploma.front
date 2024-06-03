import { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCatalog,
  changeField,
  fetchCatalog,
} from "../redux/CatalogSlice";
import { selectCategories } from "../redux/CategorySlice";

const SearchCard = () => {
  const { search } = useSelector(selectCatalog);
  const { selected } = useSelector(selectCategories);
  const dispatch = useDispatch();
  const inputEl = createRef();

  useEffect(() => {
    inputEl.current.focus();
  }, [inputEl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchCatalog({
        categoryId: selected.id,
        q: search,
      })
    );
  };

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeField(value));
  };

  return (
    <form onSubmit={handleSubmit} className="catalog-search-form form-inline">
      <input
        ref={inputEl}
        onChange={handleChange}
        value={search}
        className="form-control"
        placeholder="Поиск"
      />
    </form>
  );
};

export default SearchCard;
