import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const storeLogger = (store) => (next) => (action) => {
    let result;
    result = next(action);
    console.log('store', action, store.getState()); 
    return result;
};

export default createStore(
    rootReducers,
    compose(
        applyMiddleware(
            thunk,
            storeLogger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.devToolsExtension() : fn => fn
    )
);

