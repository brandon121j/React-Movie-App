import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieDetail from './MovieDetail';
import Loading from './Loading';
require('dotenv').config();
const api = process.env.REACT_APP_API_KEY;


const Search = () => {
	const [search, setSearch] = useState('');

	const onInputHandler = (e) => {
		setSearch(e.target.value)
	}

	const onClickHandler = async () => {

		let result = await axios.get(
			`https://www.omdbapi.com/?apikey=${api}&s=${search}&type=movie`
		);
	}

	return (
		<div className="SearchContainer">
		</div>
	);
};

export default Search;

// efbef9a0
