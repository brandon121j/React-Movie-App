import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import { MainMovie } from './components/MainMovie';
import { MainMovieDetail } from './components/MainMovieDetail';

// only one random title

export class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={MainMovie}/>
						<Route exact path="/fetch-movie/:imdbID" component={MainMovieDetail} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
