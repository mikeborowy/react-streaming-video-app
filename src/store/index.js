import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
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
            reduxThunk,
            storeLogger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : fn => fn
    )
);

