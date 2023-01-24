import { createReducer } from "@reduxjs/toolkit";

// const Search = createSlice({
//   name: "Search",
//   initialState: {
//     search: "",
//   },
//   reducers: {
//     search_value: (state, action) => {
//       state.search = action.payload;
//     },
//   },
// });

// export default Search.reducer;
const initialState = {
  search: "",
};

export const Search = createReducer(initialState, {
  searchValue: (state, action) => {
    state.search = action.payload;
  },
});
