import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const delete_wishlist = createAsyncThunk(
  "/delete/wishlist",
  async (id) => {
    return fetch(
      `http://localhost:8080/api/v1/get/product/delete/wishlist/${id}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.product);
      })
      .catch((err) => console.log(err));
  }
);
const DeleteWishlist = createSlice({
  name: "DeleteCart",
  initialState: {
    loading: false,
  },
  extraReducers: {
    [delete_wishlist.pending]: (state, action) => {
      state.loading = true;
    },
    [delete_wishlist.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [delete_wishlist.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default DeleteWishlist.reducer;
