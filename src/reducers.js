import { combineReducers } from 'redux';
import update from 'immutability-helper';

import {
	LOGIN_STARTED, 
	LOGIN_SUCCESSFUL, 
	REGISTER_SUCCESSFUL, 
	LOGIN_FAILED,

	REQUEST_POSTS,
	RECEIVE_POSTS } from './actions';

function friend(state = {
	isAuthed: false,
}, action) {
	switch (action.type) {
	case LOGIN_STARTED:
		return { isAuthed: false, isLoading: true, name: action.name };
	case LOGIN_SUCCESSFUL:
		return { ...state, isAuthed: true, isLoading: false, session: action.session };
	case REGISTER_SUCCESSFUL:
		return { ...state, isLoading: false };
	case LOGIN_FAILED:
		return { ...state, isLoading: false, status: action.status };
	default:
		return state;
	}
}

// function boards(state = {}, action) {
// 	switch (action.type) {
// 	case REQUEST_BOARDS:
// 		return { ...state, isLoading: true };
// 	case RECEIVE_BOARDS:
// 		return { ...state, ...action.boards.reduce((acc, cur) => { acc[cur.id] = cur; return acc; }, {}), isLoading: false };
// 	}
// }

function posts(state = {}, action) {
	switch (action.type) {
	case REQUEST_POSTS:
		return { ...state, isLoading: true };
	case RECEIVE_POSTS:
		return action.boards.reduce((acc, cur) => { acc[cur.id] = cur; return acc; }, { ...state, isLoading: false });
	default:
		return state;
	}
}

export default combineReducers({ friend, posts });