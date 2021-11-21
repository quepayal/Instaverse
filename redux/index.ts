import { combineReducers } from 'redux';
import { userReducer } from './UserManagement/UserReducer';

export const rootReducer = combineReducers({
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
