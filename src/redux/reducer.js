import{ combineReducers } from 'redux';

import getDataReducer from './reducers/getDataReducer';

export default combineReducers({
    data: getDataReducer,
})