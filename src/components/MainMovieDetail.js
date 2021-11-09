import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import { useParams } from 'react-router';
require('dotenv').config();
const api = process.env.REACT_APP_API_KEY;

export const MainMovieDetail = () => {
	const [loading, setLoading] = useState(false);
	const [movieData, setMovieData] = useState({});
	let { id } = useParams();

	useEffect(async () => {
		fetchMovieDetails();
	}, []);

	async function fetchMovieDetails() {
		try {
			setLoading(true);
			let result = await axios.get(
				`https://www.omdbapi.com/?apikey=${api}&i=${id}&type=movie`
			);
			setMovieData(result);
		} catch (e) {
			console.log(e);
		}
	}

	return (
	<div className="SearchContainer">
		{
			loading ? (<Loading />) : (
				console.log('NOT LOADING')
				
			)
		}
		<h1>WORKING</h1>
	</div>
	)
	
};

// export default MainMovieDetail;

// efbef9a0
