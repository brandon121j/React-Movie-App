import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieDetail from './MovieDetail';
import Loading from './Loading';
require('dotenv').config();

function HomePage() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
	const startingSearch = [
		'Superman',
		'lord of the rings',
		'batman',
		'Pokemon',
		'Harry Potter',
		'Star Wars',
		'Avengers',
		'Terminator',
	];
	const random = Math.floor(Math.random() * startingSearch.length);
	const api = process.env.REACT_APP_API_KEY;

	useEffect(async () => {
		fetchMovies();
	}, []);

	async function fetchMovies() {
		try {
			setLoading(true);
			// Map through with another array with movie id,
			let result = await axios.get(
				`https://www.omdbapi.com/?apikey=${api}&s=${startingSearch[random]}&type=movie`
			);
			// console.log(result)
			let idArray = result.data.Search.map((item) => item.imdbID);

			let finalMovieArray = idArray.map(async (item) => {
				return await axios.get(
					`https://www.omdbapi.com/?apikey=${api}&i=${item}&type=movie`
				);
			});

			Promise.all(finalMovieArray)
				.then((result) => {
                    console.log(result)
					setMovies(result);
					setLoading(false);
				})
				.catch((e) => {
					console.log(e);
				});
		} catch (e) {
			console.log(e);
		}
	}

    const onInputHandler = (e) => {
		setSearch(e.target.value)
	}

	const onClickHandler = async () => {

		let result = await axios.get(
			`https://www.omdbapi.com/?apikey=${api}&s=${search}&type=movie`
		);
	}

	return (
		<div className="app">
			<div className="SearchContainer">
				<input type="text" onInput={onInputHandler} />
				<button>Search</button>
			</div>
			<div>
				{loading ? (
					<Loading />
				) : (
					movies.map((item) => {
						return (
							<div className="HomePageContainer" key={item.data.imdbID}>
								<div className="posterContainer">
									<h3>{item.data.Title}</h3>
									<img src={item.data.Poster} />
									<p>{item.data.Rated}</p>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default HomePage;
