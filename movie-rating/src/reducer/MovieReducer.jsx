export const MovieReducer = (state,action) => {
    switch (action.type) {
        case "add_movie":
            const addMovie = [...state.allMovies,action.payload]
            return {...state,allMovies:addMovie}
        case "add_to_star":
            const filterStar = state.star.includes(action.payload) ? state.star.filter((item) => item !== action.payload) : [...state.star,action.payload];
            return {...state,star:filterStar};
        case "add_to_watchlist":
            const filterWatchlist = state.watchlist.includes(action.payload) ? state.watchlist.filter((item) => item !== action.payload) : [...state.watchlist,action.payload];
            return {...state,watchlist:filterWatchlist};
        case "set_year":
            return {...state,year:action.payload}
        case "set_genre":
            return {...state,genre:action.payload}
        case "set_rating":
            return {...state,rating:action.payload}
        case "set_search":
            return {...state,search:action.payload}
        default:
            return state;
    }
}