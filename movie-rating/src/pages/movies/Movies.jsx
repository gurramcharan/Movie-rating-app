import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext'
import {MovieCard} from '../../components/moviecard/MovieCard'
import {year} from "../../data/Year"
import {genre} from "../../data/Genre"
import {rating} from "../../data/Rating"
import { useNavigate } from 'react-router-dom'

export const Movies = () => {
    const {movieState,movieDispatch,filteredProducts} = useContext(MovieContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex-row space-around align-items'>
                <h2>Movies</h2>
                <select name="allGenre" id="allGenre" onChange={(e) => movieDispatch({type:"set_genre",payload:e.target.value})}>
                    {genre.map((genre) => (
                        <option value={genre}>{genre}</option>
                    ))}
                </select>
                <select name="releaseYear" id="releaseYear" onChange={(e) => movieDispatch({type:"set_year",payload:e.target.value})}>
                    <option value="0">Release Year</option>
                    {year.map((year) => (
                        <option value={year}>{year}</option>
                    ))}
                </select>
                <select name="rating" id="rating" onChange={(e) => movieDispatch({type:"set_rating",payload:e.target.value})}>
                    <option value="0">Rating</option>
                    {rating.map((rating) => (
                        <option value={rating}>{rating}</option>
                    ))}
                </select>
                <button style={{backgroundColor:"gray", color:"white", border:"none", padding:"0.5rem 1rem", borderRadius:"5px", cursor:"pointer"}} onClick={() => navigate("/addmovie")}>Add Movie</button>
            </div>
            {filteredProducts.length !== 0
                ? (
                    <div className='flex-row gap2 wrap margin2'>
                        {filteredProducts
                            .map(item => (
                                <div key={item.id}>
                                    <MovieCard movie={item}/>
                                    {console.log(filteredProducts.length)}
                                </div>
                            ))}
                    </div>
                )
                : (
                    <div>
                        <p
                            style={{
                            textAlign: "center",
                            fontSize: "40px",
                            color: "gray",
                            fontWeight: "400"
                        }}>...No Movies Found...</p>
                    </div>
                )}
        </div>
    )
}
