import { combineReducers } from 'redux';
import tokenReducer from '../slices/user/tokenSlice';
import userLoginAuthReducer from '../slices/user/userLoginAuthSlice';

const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
})
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;