import * as toolkit from "@reduxjs/toolkit";

const searchSlice = toolkit.createSlice({
  name: "search",
  initialState: { searchTerm: "" },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;