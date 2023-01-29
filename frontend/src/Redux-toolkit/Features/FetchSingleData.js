import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//http://localhost:8080/api/v1/product/63bd86ec49ee7184ef607d3d
export const fetch_product = createAsyncThunk("/fetch/product", async (id) => {
  return fetch(`http://localhost:8080/api/v1/product/${id}`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.product);
      return data.product;
    })
    .catch((err) => console.log(err));
});

const fetchSingleProduct = createSlice({
  name: "getSingleProduct",
  initialState: {
    product: {},
    loading: false,
  },
  extraReducers: {
    [fetch_product.pending]: (state, action) => {
      state.loading = true;
    },
    [fetch_product.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    [fetch_product.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default fetchSingleProduct.reducer;
