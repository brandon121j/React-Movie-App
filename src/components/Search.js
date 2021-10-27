import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import MovieDetail from "./MovieDetail"

class Search extends Component {

	state = {
        isError: false,
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
        poster: ""
    }


    fetchMovies = async(movieSearch) => {

        this.setState({
            isLoading: true
        });

        try {
            let result = await axios.get(`https://www.omdbapi.com/?apikey=efbef9a0&t=${movieSearch}`);
            console.log(result)
        
        
        } catch(error) {

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
                    <input type="text" onChange={this.onChangeHandler} name="movieSearch" value={this.state.movieSearch}/>
                    <button onClick={this.onSubmitHandler}>Search</button>
                </form>
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