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
        console.log(data);
        return data;

        // alert(data.message);

        // console.log(data.success);

        // window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }
);

const signIn = createSlice({
  name: "signIn",
  initialState: {
    user_id: "",
    auth: false,
    loading: false,
  },
  extraReducers: {
    [sign_in.pending]: (state, action) => {
      state.auth = false;
      state.loading = true;
    },
    [sign_in.fulfilled]: (state, action) => {
      state.user_id = action.payload.user._id;
      state.auth = action.payload.success;
      state.loading = false;
    },
    [sign_in.rejected]: (state, action) => {
      state.auth = false;
      state.loading = false;
    },
  },
});

export default signIn.reducer;
