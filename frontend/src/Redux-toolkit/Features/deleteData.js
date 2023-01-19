import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const delete_product = createAsyncThunk("/delete/product", async () => {
  return;
});

const deleteProduct = createSlice({
  name: "deleteProduct",
  initialState: {
    products: [],
    loading: false,
  },
  extraReducers: {
    [delete_product.pending]: (state, action) => {
      state.loading = true;
    },
    [delete_product.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [delete_product.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
