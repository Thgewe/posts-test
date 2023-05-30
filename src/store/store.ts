import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import {rootWatcher} from "./sagas/rootWatcher";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootWatcher);

export default store;