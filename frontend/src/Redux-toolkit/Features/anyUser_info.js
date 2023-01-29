import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AnyUser_info = createAsyncThunk("/user/info", async ({ user }) => {
  return fetch(`http://localhost:8080/api/v1/user/info/${user}`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(`user data ${data.user}`);
      return data.user;
    })
    .catch((err) => console.log(err));
});

const AnyUserInfo = createSlice({
  name: "userInfo",
  initialState: {
    User: {},
    loading: false,
  },
  extraReducers: {
    [AnyUser_info.pending]: (state, action) => {
      state.loading = true;
    },
    [AnyUser_info.fulfilled]: (state, action) => {
      state.User = action.payload;
      state.loading = false;
    },
    [AnyUser_info.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default AnyUserInfo.reducer;
