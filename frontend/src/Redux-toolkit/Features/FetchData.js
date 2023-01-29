import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetch_allProduct = createAsyncThunk(
  "/fetch/all/product",
  async () => {
    return fetch("http://localhost:8080/api/v1/get/all/product", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        return data.product;
      })
      .catch((err) => console.log(err));
  }
);

const fetchAllProduct = createSlice({
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
      state.products = action.payload;
      state.loading = false;
    },
    [fetch_allProduct.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default fetchAllProduct.reducer;
