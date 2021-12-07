import { combineReducers } from 'redux';
import { userReducer } from './UserManagement/UserReducer';
import { postsReducer } from './PostManagement/PostReducer';

export const rootReducer = combineReducers({
  userReducer,
  postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
