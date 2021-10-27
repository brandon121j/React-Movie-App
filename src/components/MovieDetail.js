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

        <div>
            <div>
                <h1>Title: {title} ({year})</h1>
                <img src={poster} alt=""/>
                <p>Plot: {plot}</p>
                <p>Genre: {genre}</p>
                <p>Rating: {rated}</p>
                <p>Director: {director}</p>
                <p>Writer: {writer}</p>
                <p>Language: {language}</p>
                <p>Country: {country}</p>
            </div>
        </div>
    )
}