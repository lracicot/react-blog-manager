import Axios from 'axios';


/* * * * * * * * * * * * * * *
 * Actions
 * * * * * * * * * * * * * * */

export function requestDataFailure(error) {
  return {
    type: 'REQUEST_DATA_FAILURE',
    error,
  };
}

export function requestDataSuccess(data) {
  return {
    type: 'REQUEST_DATA_SUCCESS',
    data,
  };
}

/* * * * * * * * * * * * * * *
 * Action creators
 * * * * * * * * * * * * * * */

export function requestData(url, method, sendData, onSuccess, onFailure) {
  return async (dispatch) => {
    // Disable api for prototype
    return dispatch(onSuccess(sendData));
    // try {
    //   const { data } = Axios({ method, url, sendData });
    //
    //   if (data.success === false) {
    //     return dispatch(onFailure(data.error));
    //   }
    //
    //   return dispatch(onSuccess(data));
    // } catch (error) {
    //   return dispatch(onFailure(error));
    // }
  };
}

export function getData(url, onSuccess, onFailure = requestDataFailure) {
  return (dispatch) => {
    dispatch(requestData(url, 'get', null, onSuccess, onFailure));
  };
}

export function postData(url, data, onSuccess, onFailure = requestDataFailure) {
  return (dispatch) => {
    dispatch(requestData(url, 'post', data, onSuccess, onFailure));
  };
}

export function deleteData(url, id, onSuccess, onFailure = requestDataFailure) {
  return (dispatch) => {
    dispatch(requestData(url, 'delete', { id }, onSuccess, onFailure));
  };
}

export function putData(url, data, onSuccess, onFailure = requestDataFailure) {
  return (dispatch) => {
    dispatch(requestData(url, 'put', data, onSuccess, onFailure));
  };
}
