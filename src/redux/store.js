import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducer';
import { createLogger } from 'redux-logger';


const logger = createLogger(); //to see errors in console

export default createStore(rootreducer, compose(applyMiddleware(thunk, logger)));
