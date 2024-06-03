import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  topSales: [],
  loading: false,
  error: null,
};

export const fetchTopSales = createAsyncThunk(
  "topSales/fetchTopSales",
  async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}top-sales`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return data;
    } catch (error) {
      throw Error("Превышен лимит попыток запроса");
    }
  }
);

const topSalesProducts = createSlice({
  name: "topSales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopSales.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.topSales = [];
      })
      .addCase(fetchTopSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        state.topSales = [];
      })
      .addCase(fetchTopSales.fulfilled, (state, action) => {
        state.topSales = action.payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export const selectTopSales = (state) => state.topSales;

export default topSalesProducts.reducer;
