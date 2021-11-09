import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import MainMovie from './components/MainMovie';
import SingleMovie from './components/SingleMovie';

// only one random title

export class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
						<MainMovie path="/" />
						<SingleMovie path="/fetch-movie/:movie" />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
