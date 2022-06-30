import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userProfileDetails",
  initialState: {
    loading: false,
    users: [],
  },
  reducers: {
    get_users_request: (state, action) => {
      return {
        loading: true,
      };
    },
  },
  extrareducers: {},
});

export const { get_users_request } = usersSlice.actions;
export default usersSlice.reducer;
