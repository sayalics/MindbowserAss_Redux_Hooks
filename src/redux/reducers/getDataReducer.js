import{GET_DATA, GET_DATA_FULLFILLED, GET_DATA_FAIL} from '../actions/types';

const initialState = {
    data: [],
    loading: true,
    error: ''
}


const getDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA :
            return {
                ...state,
                loading:false 
                };
        case GET_DATA_FULLFILLED :
            return{ 
                ...state,
                data: action.payload, 
                loading: false
                };
        case GET_DATA_FAIL :
            return{ 
                ...state,
                error: action.payload, 
                loading: false
                };
        default:
            return state;
    }
}

export default getDataReducer;