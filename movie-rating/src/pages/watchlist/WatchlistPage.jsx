import React, {useContext} from 'react'
import {MovieContext} from '../../context/MovieContext'
import { MovieCard } from '../../components/moviecard/MovieCard'

export const WatchlistPage = () => {
  const {movieState} = useContext(MovieContext)
    const watchlistLength = movieState.watchlist.length;
    return (
        <div>
            {watchlistLength === 0
                ? (
                    <div>
                        <p
                            style={{
                            textAlign: "center",
                            fontSize: "40px",
                            color: "gray",
                            fontWeight: "400"
                        }}>...No Watchlist Movies...</p>
                    </div>
                )
                : (
                    <div className='flex-row gap2 wrap margin1'>
                        {movieState
                            .watchlist
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
