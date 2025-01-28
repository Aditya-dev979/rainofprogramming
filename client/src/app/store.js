import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/features/api/authApi";
import rootReducer from "./rootRedcuser";
import { courseApi } from "@/features/api/courseApi";
import { purchaseApi } from "@/features/api/purchaseApi";
import { courseProgressApi } from "@/features/api/courseProgress.Api";


export const appStore = configureStore({
  reducer: rootReducer,
  // middleware: (defaultMiddleware) =>
  //   defaultMiddleware().concat(authApi.middleware, courseApi.middleware,purchaseApi.middleware),
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
        authApi.middleware,
        courseApi.middleware,
        purchaseApi.middleware,
        courseProgressApi.middleware
    ),
});

const initializApp = async () => {
  await appStore.dispatch(
    authApi.endpoints.loadUser.initiate({}, { forceRefetch: true })
  );
};

initializApp();
