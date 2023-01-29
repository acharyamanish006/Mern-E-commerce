import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const delete_cart = createAsyncThunk("/delete/cart", async (id) => {
  return fetch(`http://localhost:8080/api/v1/get/product/delete/cart/${id}`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});

const DeleteCart = createSlice({
  name: "DeleteCart",
  initialState: {
    loading: false,
  },
  extraReducers: {
    [delete_cart.pending]: (state, action) => {
      state.loading = true;
    },
    [delete_cart.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [delete_cart.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default DeleteCart.reducer;
