import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchClicked: false,
};

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    setSearchActive(state) {
      state.searchClicked = true;
    },
    setSearchNotActive(state) {
      state.searchClicked = false;
    },
  },
});

export const { setSearchActive, setSearchNotActive } = searchFormSlice.actions;
export const selectClickedSearch = (state) => state.searchForm.searchClicked;
export default searchFormSlice.reducer;
