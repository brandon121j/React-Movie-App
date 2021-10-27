import React from 'react';
import propTypes from "prop-types";

function movieDetail({ 
    title,
    year,
    rated,
    genre,
    director,
    writer,
    plot,
    language,
    country,
    awards,
    poster
}) {
    
    return(

        <div className="movieDetailsContainer">
            <div className="listedMovieDetails">
                <h1>Title: {title} ({year})</h1>
                <img src={poster} alt=""/>
                <p>Plot: {plot}</p>
                <p>Genre: {genre}</p>
                <p>Rating: {rated}</p>
                <p>Director: {director}</p>
                <p>Writer: {writer}</p>
                <p>Language: {language}</p>
                <p>Country: {country}</p>
                <p>Awards: {awards}</p>
            </div>
        </div>
    )
}

movieDetail.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    rated: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    director: propTypes.string.isRequired,
    writer: propTypes.string.isRequired,
    plot: propTypes.string.isRequired,
    language: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    awards: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default movieDetail;