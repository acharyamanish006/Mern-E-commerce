import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sign_up = createAsyncThunk(
  "/sign/up",
  async ({ name, email, password }) => {
    return fetch("http://localhost:8080/api/v1/sign/up", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
);

const signUp = createSlice({
  name: "signUp",
  initialState: {
    loading: false,
  },
  extraReducers: {
    [sign_up.pending]: (state, action) => {
      state.loading = true;
    },
    [sign_up.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [sign_up.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default signUp.reducer;
