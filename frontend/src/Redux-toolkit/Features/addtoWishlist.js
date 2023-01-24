import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const add_toWishList = createAsyncThunk("/add/to/wishlist", async () => {
  return;
});

const fetch_allProduct = createSlice({
  name: "getallProduct",
  initialState: {
    products: [],
    loading: false,
  },
  extraReducers: {
    [fetch_allProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [fetch_allProduct.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [fetch_allProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});