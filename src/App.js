import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import MainMovie from './components/MainMovie';
import MainMovieDetail from './components/MainMovieDetail';

// only one random title

export class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
						<MainMovie path="/" />
						<MainMovieDetail path="/fetch-movie/:movie" />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
