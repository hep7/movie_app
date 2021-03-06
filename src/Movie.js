import React from 'react';
import PropTypes from "prop-types"
import "./Movie.css"

function Movie({id,year,title,summery,poster,genres}){
    return (
        <div className="movie">
            <img src={poster} alt="{title}" title="title" />
            <div className = "move__data">
                <h3 className = "move__title">{title}</h3>
                <h5 className = "movie_year">{year}</h5>                
                <ul className ="genres">{
                    genres.map( (genre,index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))
                }</ul>
                <p className = "movie_summary">{summery.slice(0,140)}</p>               
                
            </div>
        </div>
        
    );
}

Movie.prototypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summery:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;