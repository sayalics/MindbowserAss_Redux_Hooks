import {GET_DATA, GET_DATA_FULLFILLED, GET_DATA_FAIL} from './types';
import api from '../../utils/api';
import axios from 'axios';

export const fetchData = (bool) => {
    return {
        type: GET_DATA,
        payload: bool,
        loading: false,
        };
    }

export const fetchDataFulfilled = (data) => {
    return {
        type: GET_DATA_FULLFILLED,
        payload: data.data,
        loading: false,
        };
    }

export const fetchDataFailed = (error) => {
    return {
        type: GET_DATA_FAIL,
        payload: error,
        loading:false,
        }
    }

export const getData = () => {
        return dispatch => {
            //Dispatch the fetchData action creator before retrieving to set our loading state to true.
            dispatch(fetchData(true));
            //Then get the data.
            axios.get(api.getData).then(res => {
                //Set the results to the people array.
                const data = res.data;
                dispatch(fetchDataFulfilled(data));
                //Error handle the promise and set your errorMessage
            }).catch(err => dispatch(fetchDataFailed(err)));
        
        }
    }
          
