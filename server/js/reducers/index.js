import { combineReducers } from 'redux';
import stateText from './test'
import asyncText from './async'

export default combineReducers({ stateText, asyncText })
