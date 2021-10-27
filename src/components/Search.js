import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import MovieDetail from "./MovieDetail"

class Search extends Component {

	state = {
        isError: false,
        errorMessage: "",
        isLoading: false,
        movieSearch: "",
        title: "",
        year: "",
        rated: "",
        genre: "",
        director: "",
        writer: "",
        plot: "",
        language: "",
        country: "",
        awards: "",
        poster: "",
        initialSearch: "Shrek"
    }


    async componentDidMount() {
        this.fetchMovies(this.state.initialSearch)
    }

    fetchMovies = async(movieSearch) => {

        this.setState({
            isLoading: true
        });

        try {
            let result = await axios.get(`https://www.omdbapi.com/?apikey=efbef9a0&t=${movieSearch}`);
            this.setState({
                movieSearch: result.data.movieSearch,
                title: result.data.title,
                year: result.data.year,
                rated: result.data.rated,
                genre: result.data.genre,
                director: result.data.director,
                writer: result.data.writer,
                plot: result.data.plot,
                language: result.data.language,
                country: result.data.country,
                awards: result.data.awards,
                poster: result.data.poster,
                isError: false,
                isLoading: false
            })
        
        
        } catch(error) {
            console.log(error.response);
            if (error && error.response === 404) {
                this.setState({
					isError: true,
					errorMessage: error.response.data,
					isLoading: false,
				});
            }
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = () => {
        this.fetchMovies(this.state.movieSearch)
    }


	render() {
		return (
            <div className="app">
                <form>
                    <input name="movieSearch" value={this.state.movieSearch} onChange={this.onChangeHandler}/>
                    <button onClick={this.onSubmitHandler}>Search</button>
                </form>
                <div>
                        {this.state.isError && (
                            <span style={{ color: "red" }}>{this.state.errorMessage}</span>
                        )}
                    </div>
                <div>
                    {this.state.isLoading ? (<Loading/>) : (
                        <MovieDetail
                            title={this.state.title}
                            year={this.state.year}
                            rated={this.state.rated}
                            genre={this.state.genre}
                            director={this.state.director}
                            writer={this.state.writer}
                            plot={this.state.plot}
                            language={this.state.language}
                            country={this.state.country}
                            awards={this.state.awards}
                            poster={this.state.poster}
                        />
                    )}
                </div>
            </div>
        );
	}
}

export default Search;

// efbef9a0