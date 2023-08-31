import { combineReducers } from 'redux';
import tokenReducer from '../slices/user/tokenSlice';
import userLoginAuthReducer from '../slices/user/userLoginAuthSlice';
import userDetailsReducer from '../slices/user/userDetailsSlice';
import employerDetailsReducer from '../slices/employer/employerDetailsSlice';
const rootReducer = combineReducers({
    token: tokenReducer,
    userAuth: userLoginAuthReducer,
    userDetails: userDetailsReducer,
    employerDetails:employerDetailsReducer
})
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;