import { configureStore } from "@reduxjs/toolkit";
import topSalesReducer from "../redux/TopSalesProductsSlice";
import catalogSliceReducer from "../redux/CatalogSlice";
import cartSliceReducer from "../redux/CartSlice";
import SearchFormSliceReducer from "../redux/SearchFormSlice";
import productSliceReducer from "../redux/ProductSlice";
import categoriesSliceReducer from "../redux/CategorySlice";

const store = configureStore({
  reducer: {
    topSales: topSalesReducer,
    catalog: catalogSliceReducer,
    searchForm: SearchFormSliceReducer,
    cart: cartSliceReducer,
    product: productSliceReducer,
    categories: categoriesSliceReducer,
  },
});

export default store;
