import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sign_up = createAsyncThunk(
  "/sign/up",
  async ({ name, email, password, A_img }) => {
    return fetch("http://localhost:8080/api/v1/sign/up", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        avatar: A_img,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);

        // window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }
);

const signUp = createSlice({
  name: "signUp",
  initialState: {
    auth: false,
    loading: false,
  },
  extraReducers: {
    [sign_up.pending]: (state, action) => {
      state.auth = false;
      state.loading = true;
    },
    [sign_up.fulfilled]: (state, action) => {
      state.auth = true;
      state.loading = false;
    },
    [sign_up.rejected]: (state, action) => {
      state.auth = false;
      state.loading = false;
    },
  },
});

export default signUp.reducer;
