import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const delete_product = createAsyncThunk(
  "/delete/wishlist",
  async (id) => {
    return fetch(`http://localhost:8080/api/v1/product/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }
);
const DeleteProduct = createSlice({
  name: "DeleteProduct",
  initialState: {
    productDeleted: {},
    loading: false,
  },
  extraReducers: {
    [delete_product.pending]: (state, action) => {
      state.loading = true;
    },
    [delete_product.fulfilled]: (state, action) => {
      state.productDeleted = action.payload;
      state.loading = false;
    },
    [delete_product.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default DeleteProduct.reducer;
