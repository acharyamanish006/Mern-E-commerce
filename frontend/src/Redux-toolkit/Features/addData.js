import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const post_product = createAsyncThunk(
  "/post/product",
  async ({ product, price, data, description, brand, condition, disPrice }) => {
    return fetch("http://localhost:8080/api/v1/add/product ", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name: product,
        price: price,
        img: data.url,
        description: description,
        brand: brand,
        condition: condition,
        disPrice: disPrice,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // return data.success;
        return data;
      })
      .catch((err) => console.log(err));
  }
);

const postProduct = createSlice({
  name: "postProduct",
  initialState: {
    post: {},
    loading: false,
  },
  extraReducers: {
    [post_product.pending]: (state, action) => {
      state.loading = true;
    },
    [post_product.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [post_product.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default postProduct.reducer;
/*
const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
*/
