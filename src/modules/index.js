import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reducerForm } from 'redux-form';
import specialities from '../reducers/Specialities.Reducer'
import doctors from '../reducers/Doctors.Reducer'


export default combineReducers({
  routing: routerReducer,
  form: reducerForm,
  specialities,
  doctors
})