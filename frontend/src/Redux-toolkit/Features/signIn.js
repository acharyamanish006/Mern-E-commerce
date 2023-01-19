import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sign_in = createAsyncThunk(
  "/sign/in",
  async ({ email, password }) => {
    return fetch("http://localhost:8080/api/v1/sign/in", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // return data.success;
        console.log(data.success);
      })
      .catch((err) => console.log(err));
  }
);

const signIn = createSlice({
  name: "signIn",
  initialState: {
    auth: false,
    loading: false,
  },
  extraReducers: {
    [sign_in.pending]: (state, action) => {
      state.auth = false;
      state.loading = true;
    },
    [sign_in.fulfilled]: (state, action) => {
      state.auth = true;
      state.loading = false;
    },
    [sign_in.rejected]: (state, action) => {
      state.auth = false;
      state.loading = false;
    },
  },
});

export default signIn.reducer;
