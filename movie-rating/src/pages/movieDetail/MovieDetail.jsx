import React, {useContext} from 'react'
import {useParams} from "react-router-dom"
import {MovieContext} from '../../context/MovieContext';
import "./MovieDetail.css"

export const MovieDetail = () => {
    const {movieId} = useParams();
    const {movieState,movieDispatch} = useContext(MovieContext)
    const filteredMovie = movieState
        .allMovies
        .filter((item) => item.id == movieId);

    return (
        <div className="movie-main-container">
            <div className="movie-sub-container">
                {filteredMovie.map((item) => (
                    <div key={item.id} className='movie-container'>
                        <div className="movie-img-container">
                            <img
                                src={item.imageURL}
                                alt={item.title}
                                width="400px"
                                height="500px"
                                style={{
                                borderRadius: "5px 0px 0px 5px"
                            }}/>
                        </div>
                        <div className="movie-details-container">
                            <h1>{item.title}</h1>
                            <p>{item.summary}</p>
                            <p>Year: {item.year}</p>
                            <p>Genre: {item.genre}</p>
                            <p>Rating: {item.rating}</p>
                            <p>Director: {item.director}</p>
                            <p>Writer: {item.writer}</p>
                            <p>Cast: {item.cast}</p>
                            <div className="movie-btn-container">
                                <button
                                    className='card-btn'
                                    onClick={() => movieDispatch({type: "add_to_star", payload: item})}>{movieState
                                        .star
                                        .includes(item)
                                        ? "Unstar"
                                        : "Star"}</button>
                                <button
                                    className='card-btn'
                                    onClick={() => movieDispatch({type: "add_to_watchlist", payload: item})}>{movieState
                                        .watchlist
                                        .includes(item)
                                        ? "Remove from Watchlist"
                                        : "Add to Watchlist"}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
