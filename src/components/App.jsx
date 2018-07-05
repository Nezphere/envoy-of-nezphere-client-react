import React from 'react';
import Login from './Login';
import Bbs from './Bbs';
import { Route } from 'react-router-dom';

function Index() {
	return <div>
		<h1>Nezphere</h1>
		<p>Are you looking for a fresh new journey? <br/>Now, we are <em>almost</em> online!</p>
		<p>View on Steam: <a href="http://store.steampowered.com/app/876110">Envoy of Nezphere</a></p>
		<p>Join QQ群: <a href="https://jq.qq.com/?_wv=1027&k=5IVyjW2">797370703</a></p>
		<p>Join Discord: <a href="https://discord.gg/mZxYkDB">Nezphere</a></p>
	</div>;
}

class App extends React.Component {
	render() {
		return <div>
			<Login/>
			
			<Route path="/" component={Index} exact/>
			<Route path="/bbs" component={Bbs}/>
		</div>;
	}
}

export default App;
