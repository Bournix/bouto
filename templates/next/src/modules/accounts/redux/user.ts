import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../core/store";
import { User } from "../models/user";

interface UserState {
  is_login: boolean;
  current_step: number;
  user: User;
}

const initialState: UserState = {
  is_login: false,
  current_step: 0,
  user: {
    full_name: "",
    phone_number: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_login: (state, action: PayloadAction<boolean>) => {
      state.is_login = action.payload;
    },
    set_user: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { set_login, set_user } = userSlice.actions;

export const selectIsLogin = (state: RootState) => state.accounts.is_login;
export const selectUser = (state: RootState) => state.accounts.user;

export default userSlice.reducer;
