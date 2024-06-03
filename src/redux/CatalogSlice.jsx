import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  catalogLoading: false,
  catalogError: null,
  items: [],
  moreLoading: false,
  moreVisible: true,
  moreError: null,
  search: "",
};

const fetchRequest = async (options) => {
  try {
    const categoryId = options.categoryId ? options.categoryId : 0;
    const offset = options.offset ? options.offset : 0;
    const q = options.q ? options.q : "";
    const query = new URLSearchParams({
      categoryId: `${categoryId}`,
      offset: `${offset}`,
      q: `${q}`,
    });
    const response = await fetch(`${import.meta.env.VITE_URL}items?${query}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return data;
  } catch (error) {
    throw Error("Превышен лимит попыток запроса");
  }
};

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  fetchRequest
);

export const fetchMore = createAsyncThunk("catalog/fetchMore", fetchRequest);

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    changeField(state, action) {
      state.search = action.payload;
    },
    resetForm(state) {
      state.search = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.catalogLoading = true;
        state.catalogError = null;
        state.moreVisible = false;
        state.items = [];
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.catalogError = action.error;
        state.items = [];
        state.catalogLoading = false;
        state.moreVisible = false;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.items = action.payload;
        state.catalogLoading = false;
        state.moreVisible =
          state.items.length < 6 || !state.items.length ? false : true;
      })
      .addCase(fetchMore.pending, (state) => {
        state.moreLoading = true;
        state.moreError = null;
        state.moreVisible = false;
      })
      .addCase(fetchMore.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
        state.moreLoading = false;
        state.moreVisible =
          !action.payload.length || action.payload.length < 6 ? false : true;
      })
      .addCase(fetchMore.rejected, (state, action) => {
        state.moreError = action.error;
        state.moreVisible = false;
      });
  },
});

export const { changeField, resetForm } = catalogSlice.actions;

export const selectCatalog = (state) => state.catalog;

export default catalogSlice.reducer;
