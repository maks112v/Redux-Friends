import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const ADD_FRIEND_START = ' ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = ' ADD_FRIEND_SUCCESS';
export const TOGGLE_EDITOR = 'TOGGLE_EDITOR';

export const login = creds => dispatch => {
  dispatch({type: LOGIN_START });
  axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const getFriends = () => dispatch => {
  dispatch({type: FETCH_FRIENDS_START});
  axios
    .get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(arr => {
      dispatch({type: FETCH_FRIENDS_SUCCESS, payload: arr.data })
    })
    .catch(err => {
      dispatch({type: FETCH_FRIENDS_FAILURE, payload: err })
    })
}

export const toggleEditor = () => dispatch => {
  console.log('ran');
  dispatch({type: TOGGLE_EDITOR});
}

export const addFriend = data => dispatch => {
  dispatch({type: ADD_FRIEND_START});
  axios
    .post('http://localhost:5000/api/friends', data, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(arr => {
      dispatch({type: ADD_FRIEND_SUCCESS, payload: arr.data })
    })
    .catch(err => {
      console.log(err);
    })
}