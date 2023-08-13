import './App.css';
import {Routes,Route} from "react-router-dom"
import {Movies} from "./pages/movies/Movies"
import {StarPage} from "./pages/star/StarPage"
import {WatchlistPage} from "./pages/watchlist/WatchlistPage"
import {MovieDetail} from "./pages/movieDetail/MovieDetail"
import {AddMovie} from "./pages/addMovie/AddMovie"
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">

      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/star' element={<StarPage />} />
          <Route path='/watchlist' element={<WatchlistPage />} />
          <Route path='/moviedetail/:movieId' element={<MovieDetail />} />
          <Route path='/addmovie' element={<AddMovie />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
