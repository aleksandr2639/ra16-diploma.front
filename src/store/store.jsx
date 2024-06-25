import { configureStore, combineReducers } from "@reduxjs/toolkit";
import topSalesReducer from "../redux/TopSalesProductsSlice";
import catalogSliceReducer from "../redux/CatalogSlice";
import cartSliceReducer from "../redux/CartSlice";
import SearchFormSliceReducer from "../redux/SearchFormSlice";
import productSliceReducer from "../redux/ProductSlice";
import categoriesSliceReducer from "../redux/CategorySlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  topSales: topSalesReducer,
  catalog: catalogSliceReducer,
  searchForm: SearchFormSliceReducer,
  cart: cartSliceReducer,
  product: productSliceReducer,
  categories: categoriesSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
});

export const persistor = persistStore(store);
export default store;
