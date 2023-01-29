import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const auth = createAsyncThunk("/is/auth", async () => {
  return (
    fetch("http://localhost:8080/api/v1/is/auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        return data.user._id;
      })
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
});

const AuthId = createSlice({
  name: "auth",
  initialState: {
    user_id: {},
    loading: false,
  },
  extraReducers: {
    [auth.pending]: (state, action) => {
      state.loading = true;
    },
    [auth.fulfilled]: (state, action) => {
      state.user_id = action.payload;
      state.loading = false;
    },
    [auth.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default AuthId.reducer;
