import { createSlice } from "@reduxjs/toolkit";

export const userProfileSlice = createSlice({
  name: "userProfileDetails",
  initialState: {
    loading: false,
    userInfos: {},
  },
  reducers: {
    user_profile_request: (state, action) => {
      return {
        loading: true,
      };
    },
  },
  extrareducers: {},
});

export const { user_profile_request } = userProfileSlice.actions;
export default userProfileSlice.reducer;
