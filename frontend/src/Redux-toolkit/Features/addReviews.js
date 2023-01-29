import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const add_reviews = createAsyncThunk(
  "/add/reviews",
  async ({ id, user_id, value, review }) => {
    return fetch(`http://localhost:8080/api/v1/add/review/${id}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        user_id: user_id,
        rating: value,
        review: review,
      }),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
);

const addReviews = createSlice({
  name: "addReviews",
  initialState: {
    review: {},
    loading: false,
  },
  extraReducers: {
    [add_reviews.pending]: (state, action) => {
      state.loading = true;
    },
    [add_reviews.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [add_reviews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default addReviews.reducer;
