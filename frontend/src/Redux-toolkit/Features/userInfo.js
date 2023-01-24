import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const user_info = createAsyncThunk("/user/info", async () => {
  return fetch("http://localhost:8080/api/v1/user/info", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      return data.user;
    })
    .catch((err) => console.log(err));
});

const userInfo = createSlice({
  name: "userInfo",
  initialState: {
    user: {},
    loading: false,
  },
  extraReducers: {
    [user_info.pending]: (state, action) => {
      state.loading = true;
    },
    [user_info.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    [user_info.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default userInfo.reducer;
