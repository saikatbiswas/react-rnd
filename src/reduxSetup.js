import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'store/reducers';
import rootSagas from 'store/sagas';


const reduxSetup = ()=>{
    const compostEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compostEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSagas);

    return store;
}

export default reduxSetup;