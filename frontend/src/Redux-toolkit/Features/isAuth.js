import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// let auth = false;
export const is_auth = createAsyncThunk("/is/auth", async () => {
  return (
    fetch("http://localhost:8080/api/v1/is/auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      // .then((data) => ( = data.success))
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
});

const isAuth = createSlice({
  name: "isAuth",
  initialState: {
    Auth: false,
    loading: false,
  },
  extraReducers: {
    [is_auth.pending]: (state, action) => {
      state.loading = true;
    },
    [is_auth.fulfilled]: (state, action) => {
      state.Auth = true;
      state.loading = false;
    },
    [is_auth.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default isAuth.reducer;
