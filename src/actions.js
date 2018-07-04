import fetch from 'cross-fetch';

function postJson(obj) {
	return {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(obj),
	};
}

function fromEndpoint(endpoint) {
	return 'https://api.nezphere.com' + endpoint;
}

export function loginAsync(name, pass) {
	return dispatch => {
		dispatch(loginStarted(name));
		return fetch(fromEndpoint('/v1/friends/login'), postJson({ name, pass })).then(res => {
			if (!res.ok) throw res;
			return res.text();
		}).then(res => {
			dispatch(loginSuccessful(res));
		}).catch(err => {
			dispatch(loginFailed(err.status));
		});
	};
}

export function registerAsync(name, pass) {
	return dispatch => {
		dispatch(loginStarted(name));
		return fetch(fromEndpoint('/v1/friends/register'), postJson({ name, pass })).then(res => {
			if (!res.ok) throw res;
			dispatch(registerSuccessful());
		}).catch(err => {
			dispatch(loginFailed(err.status));
		});
	};
}

export const LOGIN_STARTED = 'LOGIN_STARTED';
function loginStarted(name) {
	return { type: LOGIN_STARTED, name };
}

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESS';
function loginSuccessful(session) {
	return { type: LOGIN_SUCCESSFUL, session };
}

export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESS';
function registerSuccessful() {
	return { type: REGISTER_SUCCESSFUL };
}

export const LOGIN_FAILED = 'LOGIN_FAILED';
function loginFailed(status) {
	return { type: LOGIN_FAILED, status };
}