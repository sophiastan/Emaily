import axios from 'axios';
import { FETCH_USER } from './types';
// All of our "action creators"
// Action creators are functions that return actions!

// export const changeLogin = shouldBeLoggedIn => {
//   return {
//     type: 'change_auth',
//     payload: shouldBeLoggedIn
//   };
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, paylod: res.data });
};