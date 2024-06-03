import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  item: null,
  quantity: 1,
  selectedSize: "",
  isLoading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "productPage/fetchProduct",
  async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}items/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error("Превышен лимит попыток запроса");
    }
  }
);

const productSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    increment(state) {
      state.quantity = state.quantity < 10 ? ++state.quantity : 10;
    },
    decrement(state) {
      state.quantity = state.quantity > 1 ? --state.quantity : 1;
    },
    setTheSize(state, action) {
      state.selectedSize = action.payload;
    },
    resetSize(state) {
      state.selectedSize = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.item = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
        state.selectedSize = "";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.error = action.error;
        state.item = null;
        state.isLoading = false;
      });
  },
});

export const selectProduct = (state) => state.product;
export const { increment, decrement, setTheSize, resetSize } =
  productSlice.actions;

export default productSlice.reducer;
