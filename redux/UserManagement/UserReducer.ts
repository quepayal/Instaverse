import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  name: string;
}

const initialState = {
  name: '',
} as IUser;

//Action
export const fetchUserDetails = createAction<string>('user/fetchUserDetails');

//Reducer
export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUserDetails, (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.name = action.payload;
      }
    })
    .addDefaultCase((state, action) => {});
});
