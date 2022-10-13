import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: "/movie-detail",
            state: {
                year: year,
                title,
                summary,
                poster,
                genres
            }
        }}>
        <div className="movie">
            <label/>
            <img src={poster} alt={title} title={title}/>
            <div className="movies__data">
                <h3 className="movie__tile">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
                <ul className="genres">
                    { genres === undefined ? "" : genres.map((genre, index) => <li key={index} className="genres_genre">{genre}</li>)}
                </ul>
            </div>
        </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;