import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/CartSlice";
import { selectCatalog } from "../../redux/CatalogSlice";
import {
  selectClickedSearch,
  setSearchActive,
  setSearchNotActive,
} from "../../redux/SearchFormSlice";

const headerIcons = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(selectCatalog);
  const clickedSearch = useSelector(selectClickedSearch);
  const navigate = useNavigate();
  const { cartItems } = useSelector(selectCart);
  console.log(cartItems);

  const onSearchClick = (e) => {
    if (clickedSearch && search) {
      navigate(import.meta.env.VITE_CATALOG);
    } else {
      dispatch(setSearchNotActive());
    }

    if (!clickedSearch) {
      dispatch(setSearchActive());
    }
  };

  const onCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="header-controls-pics">
      <div
        onClick={onSearchClick}
        data-id="search-expander"
        className="header-controls-pic header-controls-search"
      ></div>
      <div
        className="header-controls-pic header-controls-cart"
        onClick={onCartClick}
      >
        {cartItems.length !== 0 && (
          <div className="header-controls-cart-full">{cartItems.length}</div>
        )}
        <div className="header-controls-cart-menu"></div>
      </div>
    </div>
  );
};

export default headerIcons;
