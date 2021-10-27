import React from 'react';
import propTypes from "prop-types";

function MovieDetail({ 
    title,
    year,
    rated,
    genre,
    plot,
    language,
    country,
    awards,
    poster,
    runtime
}) {
    
    return(
        <div className="movieDetailsContainer">
            <div className="listedMovieDetails">
                <h1>Title: {title} ({year})</h1>
                <img src={poster} alt=""/>
                <p>Plot:</p> 
                <p>{plot}</p>
                <p>Genre: {genre}</p>
                <p>Runtime: {runtime}</p>
                <p>Rating: {rated}</p>
                <p>Language: {language}</p>
                <p>Country: {country}</p>
                <p>Awards: {awards}</p>
            </div>
        </div>
    )
}

MovieDetail.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    rated: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    plot: propTypes.string.isRequired,
    language: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    awards: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    runtime: propTypes.string.isRequired
}

export default MovieDetail;