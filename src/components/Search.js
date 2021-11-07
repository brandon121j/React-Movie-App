import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetail from './MovieDetail';
import Loading from './Loading';

const Search = () => {
	const [movies, setMovies] = useState([]);
	const [movieSearch, setMovieSearch] = useState('');

	useEffect(async () => {
		fetchMovies();
	}, []);

	async function fetchMovies(searchedMovie) {
		console.log(movieSearch)
		try {
			let result = await axios.get(
				`https://www.omdbapi.com/?apikey=efbef9a0&s=${searchedMovie}`
			);
			console.log(result)
			setMovies(result.data.Search);
			console.log(movies)
		} catch (e) {
			console.log(e.response);
			// if (e && e.response.status === 404) {
			// 	this.setState({
			// 		isError: true,
			// 		errorMessage: e.response.data,
			// 		isLoading: false,
			// 	});
			// }
		}
	};

	const onInputHandler = (e) => {
		setMovieSearch(e.target.value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		fetchMovies(movieSearch)
	}

	return (
		<div className="app">
			<form onSubmit={onSubmit}>
				<input
					name="movieSearch"
					onInput={onInputHandler}
				/>
				<button type='submit'>Search</button>
			</form>
			<div>
		
			</div>
			<div>
			</div>
		</div>
	);
};

export default Search;

// efbef9a0
