import { combineReducers } from 'redux';

import { LOGIN_STARTED, LOGIN_SUCCESSFUL, REGISTER_SUCCESSFUL, LOGIN_FAILED } from './actions';

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

export default combineReducers({ friend });