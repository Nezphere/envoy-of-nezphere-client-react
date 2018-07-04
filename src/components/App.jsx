import React from 'react';
import Login from './Login';

class App extends React.Component {
	render() {
		return <div className="Ta(c)">
			<Login/>
			
			<h1>Nezphere</h1>
			<p>Are you looking for a fresh new journey? <br/>Now, we are <em>almost</em> online!</p>
			<p>View on Steam: <a href="http://store.steampowered.com/app/876110">Envoy of Nezphere</a></p>
			<p>Join QQ群: <a href="https://jq.qq.com/?_wv=1027&k=5IVyjW2">797370703</a></p>
			<p>Join Discord: <a href="https://discord.gg/mZxYkDB">Nezphere</a></p>
		</div>;
	}
}

export default App;
