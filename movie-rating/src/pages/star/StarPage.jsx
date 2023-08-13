import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext'
import { MovieCard } from '../../components/moviecard/MovieCard'

export const StarPage = () => {
    const {movieState} = useContext(MovieContext)
    const starLength = movieState.star.length;
    return (
        <div>
            {starLength === 0
                ? (
                    <div>
                        <p
                            style={{
                            textAlign: "center",
                            fontSize: "40px",
                            color: "gray",
                            fontWeight: "400"
                        }}>...No Starred Movies...</p>
                    </div>
                )
                : (
                    <div className='flex-row gap2 wrap margin1'>
                        {movieState
                            .star
                            .map(item => (
                                <div>
                                    <MovieCard movie={item}/>
                                </div>
                            ))}
                    </div>
                )}
        </div>
    )
}
