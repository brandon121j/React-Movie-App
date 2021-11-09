import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import SingleMovie from './components/SingleMovie';

// only one random title

export class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
						<HomePage path="/" />
						<SingleMovie path="/fetch-movie/:movie" />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
