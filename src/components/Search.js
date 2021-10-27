import React, { Component } from "react";
import axios from "axios";
import MovieDetail from "./MovieDetail";
import Loading from "./Loading";

class Search extends Component {
	state = {
		movieSearch: "",
		title: "",
		year: "",
		rated: "",
		genre: "",
		plot: "",
		language: "",
		country: "",
		awards: "",
		poster: "",
        runtime: "",
		initialSearch: "shrek",
		isError: false,
		errorMessage: "",
		isLoading: false,
	};

	async componentDidMount() {
		this.fetchMovies(this.state.initialSearch);
	}

	fetchMovies = async (movieSearch) => {
		this.setState({
			isLoading: true,
		});

		try {
			let result = await axios.get(
				`https://www.omdbapi.com/?apikey=efbef9a0&t=${movieSearch}`
			);
			console.log(result);
			this.setState({
				title: result.data.Title,
				year: result.data.Year,
				rated: result.data.Rated,
				genre: result.data.Genre,
				plot: result.data.Plot,
				language: result.data.Language,
				country: result.data.Country,
				awards: result.data.Awards,
				poster: result.data.Poster,
                runtime: result.data.Runtime,
				isError: false,
				errorMessage: "",
				isLoading: false,
			});
		} catch (e) {
			console.log(e.response);
			if (e && e.response.status === 404) {
				this.setState({
					isError: true,
					errorMessage: e.response.data,
					isLoading: false,
				});
			}
		}
	};

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmitHandler = async() => {
		this.fetchMovies(this.state.movieSearch);
	};

	render() {
		return (
			<div className="app">
				<form>
					<input
						name="movieSearch"
						value={this.state.movieSearch}
						onChange={this.onChangeHandler}
					/>
					<button onClick={this.onSubmitHandler}>Search</button>
				</form>
				<div>
					{this.state.isError && (
						<span style={{ color: "red" }}>{this.state.errorMessage}</span>
					)}
				</div>
				<div>
					{this.state.isLoading ? (
						<Loading />
					) : (
						<MovieDetail
							title={this.state.title}
							year={this.state.year}
							rated={this.state.rated}
							genre={this.state.genre}
							plot={this.state.plot}
							language={this.state.language}
							country={this.state.country}
							awards={this.state.awards}
							poster={this.state.poster}
                            runtime={this.state.runtime}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default Search;

// efbef9a0
