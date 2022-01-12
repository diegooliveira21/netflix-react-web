import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {userReducer} from "../user/user.slice";
import storeSaga from "./store.saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: { user: userReducer },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(storeSaga)

export default store
