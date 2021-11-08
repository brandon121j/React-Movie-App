import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieDetail from './MovieDetail';
import Loading from './Loading';
require('dotenv').config();


const Search = () => {
	const [movies, setMovies] = useState([]);
	const [typedSearch, setTypedSearch] = useState('');
	const [movieSearch, setMovieSearch] = useState('');
	const startingSearch = ['Superman', 'lord of the ring', 'batman', 'Pokemon', 'Harry Potter', 'Star Wars', 'Avengers', 'Terminator'];
	const random = Math.floor(Math.random() * startingSearch.length);
	const api = process.env.API_KEY

	useEffect(async () => {
		fetchMovies(movieSearch);
	}, [movieSearch]);

	async function fetchMovies(search) {
		try {
			// Map through with another array with movie id, 
			console.log(api)
			let result = await axios.get(
				`https://www.omdbapi.com/?apikey=${api}&s=${startingSearch[random]}`
			);
			// console.log(result)
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
		setTypedSearch(e.target.value);
	}

	const onClickHandler = () => {
		setMovieSearch(typedSearch)
	}

	return (
		<div className="app">
				<input
					name="movieSearch"
					onInput={onInputHandler}
				/>
				<button onClick={onClickHandler}>Search</button>
			<div>
				{
					movies.map((item) => {
						return (
							<div>
								<h3>{item}</h3>
							</div>
						)
					})
				}
			</div>
			<div>
			</div>
		</div>
	);
};

export default Search;

// efbef9a0
