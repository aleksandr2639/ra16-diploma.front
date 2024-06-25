import React, { createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeField, selectCatalog } from "../../redux/CatalogSlice";
import { selectClickedSearch } from "../../redux/SearchFormSlice";

const HeaderForm = () => {
  const clicked = useSelector(selectClickedSearch);
  const { search } = useSelector(selectCatalog);
  const dispatch = useDispatch();
  const inputRef = createRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, [clicked, inputRef]);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeField(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(import.meta.env.VITE_CATALOG);
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-id="search-form"
      className={
        clicked
          ? "header-controls-search-form form-inline"
          : "header-controls-search-form form-inline invisible"
      }
    >
      <input
        ref={inputRef}
        onChange={handleChange}
        value={search}
        className="form-control"
        placeholder="Поиск"
      />
    </form>
  );
};

export default HeaderForm;
