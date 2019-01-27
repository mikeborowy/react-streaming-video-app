import { streamsAPI } from '../api/index';
import history from '../history';
import _ from 'lodash';

export const types = {
    GET_STREAM_LIST: 'GET_STREAM_LIST',
    GET_STREAM: 'GET_STREAM',
    CREATE_STREAM: 'CREATE_STREAM',
    EDIT_STREAM: 'EDIT_STREAM',
    DELETE_STREAM: 'DELETE_STREAM'
};

/**
 * {
 *  2: {}
 *  5: {}
 * }
 */
const INITIAL_STATE = {}

export const streams = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_STREAM_LIST:
            return { ...state, ..._.mapKeys(action.payload, 'id') };

        case types.GET_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case types.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case types.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case types.DELETE_STREAM:
            return _.omit(state, action.payload);
    
        default:
            return state;
    }
}

/** ACTIONS START */
export const onGetStreamList = (streams) => ({ type: types.GET_STREAM_LIST, payload: streams});
export const onCreateStream = (stream) => ({ type: types.CREATE_STREAM, payload: stream});
export const onGetStream = (stream) => ({ type: types.GET_STREAM, payload: stream});
export const onEditStream = (stream) => ({ type: types.EDIT_STREAM, payload: stream});
export const onDeleteStream = (id) => ({ type: types.DELETE_STREAM, payload: id});
/** ACTIONS END */

/** REQ ACTIONS START */
export const onGetStreamListAPI = () => async (dispatch) => {
    const response = await streamsAPI.get('/streams');
    dispatch(onGetStreamList(response.data));
};

export const onCreateStreamAPI = (formValues) => async (dispatch, getState) => {
    const {userId} = {...getState().auth};
    const response = await streamsAPI.post('/streams', {...formValues, userId});
    dispatch(onCreateStream(response.data));
    history.push('/');
};

export const onGetStreamAPI = (id) => async (dispatch) => {
    const response = await streamsAPI.get(`/streams/${id}`);
    dispatch(onGetStream(response.data));
};

export const onEditStreamAPI = (id,formValues) => async (dispatch) => {
    const response = await streamsAPI.patch(`/streams/${id}`, formValues);
    dispatch(onEditStream(response.data));
    history.push('/');
};

export const onDeleteStreamAPI = (id) => async (dispatch) => {
    await streamsAPI.delete(`/streams/${id}`);
    dispatch(onDeleteStream(id));
    history.push('/');
};
/** REQ ACTIONS END */

