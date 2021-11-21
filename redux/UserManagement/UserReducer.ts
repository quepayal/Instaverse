import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  IUser,
  IFollowers,
  IFollowing,
  FollowersAction,
  FollowingAction,
} from '../../interfaces/sharedInterfaces';

const initialState = {
  username: '',
  name: '',
  email: '',
  followers: [
    'quepayal',
    'quepalak',
    'pi',
    'Outlook',
    'FBverse',
    'Instaverse',
    'Metaverse',
    'cr7',
    'adhoc',
    'mom',
  ],
  following: [
    'quepayal',
    'quepalak',
    'pi',
    'Outlook',
    'FBverse',
    'Instaverse',
    'Metaverse',
    'cr7',
    'adhoc',
    'mom',
  ],
} as IUser;

//Action
export const fetchUserDetails = createAction<IUser>('user/fetchUserDetails');
export const updateUsername = createAction<string>('user/updateUsername');
export const updateFullname = createAction<string>('user/updateFullname');
export const updateEmail = createAction<string>('user/updateEmail');
export const updateFollowers = createAction<IFollowers>('user/updateFollowers');
export const updateFollowing = createAction<IFollowing>('user/updateFollowing');

//Reducer
export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUserDetails, (state, action: PayloadAction<IUser>) => {
      if (action.payload) {
        const { username, name, email, followers, following } = action.payload;
        state = { ...state, username, name, email, followers, following };
      }
    })
    .addCase(updateUsername, (state, action: PayloadAction<string>) => {
      if (action.payload) state.username = action.payload;
    })
    .addCase(updateFullname, (state, action: PayloadAction<string>) => {
      if (action.payload) state.name = action.payload;
    })
    .addCase(updateEmail, (state, action: PayloadAction<string>) => {
      if (action.payload) state.email = action.payload;
    })
    .addCase(updateFollowers, (state, action: PayloadAction<IFollowers>) => {
      const userAction: IFollowers = action.payload;
      if (userAction.action === FollowersAction.add)
        state.followers.push(userAction.username);
      else {
        const idx = state.followers.indexOf(userAction.username, 0);
        if (idx > -1) state.followers.splice(idx, 1);
      }
    })
    .addCase(updateFollowing, (state, action: PayloadAction<IFollowing>) => {
      const userAction: IFollowing = action.payload;
      if (userAction.action === FollowingAction.follow)
        state.following.push(userAction.username);
      else {
        const idx = state.following.indexOf(userAction.username, 0);
        if (idx > -1) state.following.splice(idx, 1);
      }
    })
    .addDefaultCase((state, action) => {});
});
