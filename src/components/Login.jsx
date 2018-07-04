import React from 'react';
import { connect } from 'react-redux';
import { loginAsync, registerAsync } from '../actions';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '', pass: '',
		};

		this.onInputChange = e => {
			const target = e.target;
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const name = target.name;
		
			this.setState({
				[name]: value,
			});
		};

		this.onLogin = e => {
			this.props.login(this.state.name, this.state.pass);
			e.preventDefault();
		};

		this.onRegister = e => {
			this.props.register(this.state.name, this.state.pass);
			e.preventDefault();
		};
	}

	render() {
		return <div className="Ta(end) Bgc($gray8) C(white) Pos(st) T(0) W($100)">
			{ this.props.isLoading ? 
				<span className="Mend($2) Lh($6)">Loading...</span> : 
				this.props.isAuthed ? 
					<span className="Mend($2) Lh($6)">Welcome back, {this.props.name}.</span> : 
					<form onSubmit={this.onLogin}>
						<span className="C($red)">{this.props.status}</span>
						<label className="Mstart($2)">Name:</label>
						<input className="Mstart($2)" name="name" type="text" value={this.state.name} onChange={this.onInputChange}/>
						<br className="D(n)--sm"/>
						<label className="Mstart($2)">Pass: </label>
						<input className="Mstart($2)" name="pass" type="password" value={this.state.pass} onChange={this.onInputChange}/>
						<br className="D(n)--md"/>
						<button className="Mstart($2) Pos(r) End(-1px)" type="submit">Login</button>
						<button type="button" onClick={this.onRegister}>Register</button>
					</form> }
		</div>;
	}
}

export default connect((state) => {
	// @ts-ignore
	return { ...state.friend };
}, (dispatch) => {
	return {
		// @ts-ignore
		login: (name, pass) => { dispatch(loginAsync(name, pass)); },
		// @ts-ignore
		register: (name, pass) => { dispatch(registerAsync(name, pass)); }, 
	};
})(Login);