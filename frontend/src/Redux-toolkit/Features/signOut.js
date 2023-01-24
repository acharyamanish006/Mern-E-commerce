import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sign_out = createAsyncThunk("/sign/out", async () => {
  return fetch("http://localhost:8080/api/v1/sign/out", {
    credentials: "include",
  })
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
      alert("Your Signed Out");
    })
    .catch((err) => console.log(err));
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
