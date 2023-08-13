import React, { useContext } from 'react'
import "./MovieCard.css"
import { MovieContext } from '../../context/MovieContext'
import {Link} from 'react-router-dom'

export const MovieCard = ({movie}) => {
    const {movieDispatch,movieState} = useContext(MovieContext)
  return (
    <div className='card-main-container'>
        <div className="card-img-container">
            <Link to={`/moviedetail/${movie.id}`}><img src={movie.imageURL} alt={movie.title} width="300px" height="250px" /></Link>
        </div>
        <div className="card-title-container">
            <h2>{movie.title}</h2>
        </div>
        <div className="card-summary-container">
            <p>{movie.summary}</p>
        </div>
        <div className="card-btn-container">
            <button className='card-btn' onClick={() => movieDispatch({type:"add_to_star", payload: movie})}>{movieState.star.includes(movie) ? "Unstar" : "Star"}</button>
            <button className='card-btn' onClick={() => movieDispatch({type:"add_to_watchlist", payload: movie})}>{movieState.watchlist.includes(movie) ? "Remove from Watchlist" : "Add to Watchlist"}</button>
        </div>
    </div>
  )
}
