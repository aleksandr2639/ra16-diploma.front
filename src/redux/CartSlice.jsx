import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const saveLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const items =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const initialState = {
  cartItems: items,
  cartLoading: false,
  cartreError: null,
  orderState: false,
};

export const fetchOrder = createAsyncThunk("cart/fetchOrder", async (body) => {
  await fetch(`${import.meta.env.VITE_URL}order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const index = state.cartItems.findIndex(
        (el) => el.id === action.payload.id && el.size === action.payload.size
      );
      if (index !== -1) {
        state.cartItems[index].quantity += action.payload.quantity;
        state.cartItems[index].total += action.payload.total;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
      saveLocalStorage(state.cartItems);
    },
    removeProductFromCart(state, action) {
      state.cartItems.splice(action.payload, 1);
      saveLocalStorage(state.cartItems);
    },
    resetOrder(state) {
      state.orderState = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending.type, (state) => {
        state.cartLoading = true;
        state.cartreError = null;
        state.orderState = false;
      })
      .addCase(fetchOrder.fulfilled.type, (state, action) => {
        if (action.payload === 204) {
          state.cartLoading = false;
          state.cartItems = [];
          state.orderState = true;
        }
      })
      .addCase(fetchOrder.rejected.type, (state, action) => {
        state.cartreError = action.error;
        state.cartLoading = false;
        state.orderState = false;
      });
  },
});

export const { addProductToCart, removeProductFromCart, resetOrder } =
  cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
