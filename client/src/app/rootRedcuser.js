// import { combineReducers } from "@reduxjs/toolkit"
// import authReducer from "../features/authSlice"
// import { authApi } from "@/features/api/authApi"
// import { courseApi } from "@/features/api/courseApi";
// import { purchaseApi } from "@/features/api/purchaseApi";

// const rootReducer = combineReducers({
//     [authApi.reducerPath]:authApi.reducer,
//     [courseApi.reducerPath]:courseApi.reducer,
//     [purchaseApi.reducer]:purchaseApi.reducer,
//     auth:authReducer,
// });

// export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";
import { purchaseApi } from "@/features/api/purchaseApi";
import { courseProgressApi } from "@/features/api/courseProgress.Api";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [purchaseApi.reducerPath]: purchaseApi.reducer, // Corrected here
    [courseProgressApi.reducerPath]: courseProgressApi.reducer, // Corrected here
    auth: authReducer,
});

export default rootReducer;
