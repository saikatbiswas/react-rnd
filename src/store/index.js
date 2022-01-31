import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSagas from "./sagas";

const readuxStore = ()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
    sagaMiddleware.run(rootSagas);

    return store
}

export default readuxStore;

