import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';
import HomePage from './components/HomePage';

// only one random title

export class App extends Component {
	render() {
		return (
			<div className="App">
				<Search />
				<HomePage/>
			</div>
		);
	}
}

export default App;
