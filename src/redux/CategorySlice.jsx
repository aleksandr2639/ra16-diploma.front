import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selected: { id: 0 },
  categoriesError: null,
  categoriesLoading: false,
};

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL}categories`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await data;
    } catch (error) {
      throw Error("Превышен лимит попыток запроса");
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelected(state, action) {
      state.selected.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.categoriesLoading = true;
        state.categoriesError = null;
        state.categories = [];
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.categories = [];
        state.categoriesLoading = false;
        state.categoriesError = action.error;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError = null;
        state.categories = action.payload;
      });
  },
});

export const { setSelected } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories;

export default categoriesSlice.reducer;
