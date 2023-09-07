import { combineReducers } from 'redux';
import tokenReducer from '../slices/user/tokenSlice';
import userLoginAuthReducer from '../slices/user/userLoginAuthSlice';
import userDetailsReducer from '../slices/user/userDetailsSlice';
import employerDetailsReducer from '../slices/employer/employerDetailsSlice';
import employerTokenReducer from '../slices/employer/employerTokenSlice';
import employerJobsReducer from '../slices/employer/employerJobsSlice';
import employerJobDetailReducer from '../slices/employer/employerJobDetailsSlice';

const rootReducer = combineReducers({
    token: tokenReducer,
    employerToken: employerTokenReducer,
    userAuth: userLoginAuthReducer,
    userDetails: userDetailsReducer,
    employerDetails:employerDetailsReducer,
    employerJobs: employerJobsReducer,
    employerJobDetails: employerJobDetailReducer,
    // allJobs: allJobReducer,
    // jobDetails: jobDetailReducer,
})
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;