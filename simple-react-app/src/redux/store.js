import { configureStore } from "@reduxjs/toolkit";
import user_profile_reducer from "./userProfile.slice";
import users_reducer from "./usersSlice.slice";

const store = configureStore({
  reducer: {
    userProfileDetails: user_profile_reducer,
    users: users_reducer,
  },
});

export default store;
