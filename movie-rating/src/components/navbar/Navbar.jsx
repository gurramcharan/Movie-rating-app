import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"
import { MovieContext } from '../../context/MovieContext'

export const Navbar = () => {
  const {movieDispatch} = useContext(MovieContext)
    return (
        <div className='navbar-main-container'>
            <div>
              <p className='navbar-heading'>IMDB</p>
            </div>
            <div>
              <input type="text" name="search" id="search" placeholder='Search movies by title, cast and director...' onChange={(e) => movieDispatch({type:"set_search", payload:e.target.value})} />
            </div>
            <div className='navlink-container'>
                <NavLink className="navbar-link" to="/">Movies</NavLink>
                <NavLink  className="navbar-link" to="/watchlist">Watch List</NavLink>
                <NavLink className="navbar-link" to="/star">Starred Movies</NavLink>
            </div>
        </div>
    )
}
