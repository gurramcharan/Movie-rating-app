import React, {useContext, useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./AddMovie.css"
import {MovieContext} from "../../context/MovieContext"

export const AddMovie = () => {
    const {movieState, movieDispatch} = useContext(MovieContext);
    const navigate = useNavigate()
    const [movieData,
        setMovieData] = useState({
        id: 0,
        title: "",
        year: 0,
        genre: "",
        rating: 0,
        director: "",
        writer: "",
        cast: "",
        summary: "",
        imageURL: ""
    })

    const productLength = movieState.allMovies.length + 1

    const handleAdd = () => {
        setMovieData(prev => ({
            ...prev,
            id: productLength
        }));
        movieDispatch({type: "add_movie", payload: movieData})
        navigate("/")
    }
    return (
        <div className='add-main-container'>
            <div className="add-sub-container flex-column gap margin1">
                <h3>Add New Movie</h3>
                <div className='flex-row space-between'>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        title: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        name="year"
                        id="year"
                        max="2023"
                        maxLength="4"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        year: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        name="genre"
                        id="genre"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        genre: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        id="rating"
                        max="10"
                        maxLength="2"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        rating: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="director">Director:</label>
                    <input
                        type="text"
                        name="director"
                        id="director"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        director: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="writer">Writer:</label>
                    <input
                        type="text"
                        name="writer"
                        id="writer"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        writer: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="cast">Cast:</label>
                    <input
                        type="text"
                        name="cast"
                        id="cast"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        cast: e.target.value
                    }))}/></div>

                <div className='flex-row space-between'>
                    <label htmlFor="summary">Summary:</label>
                    <input
                        type="text"
                        name="summary"
                        id="summary"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        summary: e.target.value
                    }))}/></div>

                <div className='flex-row gap space-between'>
                    <label htmlFor="image">ImageURl:</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        onChange={(e) => setMovieData((prev) => ({
                        ...prev,
                        imageURL: e.target.value
                    }))}/></div>
                <div className='flex-row align-items justify-content'>
                    <button
                        style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "gray",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px"
                    }}
                        onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
    )
}
