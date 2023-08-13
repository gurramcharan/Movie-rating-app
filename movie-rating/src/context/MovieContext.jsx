import {createContext, useReducer} from "react";
import {movies} from "../data/Data";
import {MovieReducer} from "../reducer/MovieReducer";

export const MovieContext = createContext()

export const MovieProvider = ({children}) => {

    const initialData = {
        allMovies: movies,
        watchlist: [],
        star: [],
        search: "",
        year: "0",
        rating: "0",
        genre: "All Genre"
    }

    const [movieState,
        movieDispatch] = useReducer(MovieReducer, initialData);

    const filterBySearch = movieState.search !== ""
        ? movieState
            .allMovies
            .filter((item) => item.title.toLowerCase().includes(movieState.search.toLowerCase()) || item.director.toLowerCase().includes(movieState.search.toLowerCase()))
        : movieState.search !== ""
            ? movieState
                .allMovies
                .filter((item) => item.cast.toLowerCase().includes(movieState.search.toLowerCase()))
            : movieState.allMovies;

    const filterByGenre = (movieState.genre !== "All Genre")
        ? filterBySearch.filter((item) => item.genre.includes(movieState.genre))
        : filterBySearch

    const filterByYear = (movieState.year !== "0")
        ? filterByGenre.filter((item) => item.year == movieState.year)
        : filterByGenre

    const filteredProducts = movieState.rating !== "0"
        ? filterByYear.filter((item) => item.rating == movieState.rating)
        : filterByYear

    return (
        <MovieContext.Provider
            value={{
            movieState,
            movieDispatch,
            filteredProducts
        }}>
            {children}
        </MovieContext.Provider>
    )
}