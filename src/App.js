import "./App.css";
import { useState, useEffect } from "react";
import MovieList from "./Component/MovieList";
import { NavBar } from "./Component/NavBar";
import { SelectedMovie } from "./Component/SelectedMovie";
function App() {  
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1)
  const [movieId, setMovieId] = useState('');

  const getMovieData = async(searchValue) => {
    clearTimeout(searchValue)
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e7bf9e21&page=${page}&pagesize=${15}`
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
  };

  const prevPage = async() =>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e7bf9e21&page=${page-1}&pagesize=${15}`
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
      setPage(page-1);
      console.log(page)
			setMovies(responseJson.Search);
  } 
}
   const NextPage = async() =>{
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e7bf9e21&page=${page+1}&pagesize=${15}`
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
      setPage(page+1);
      console.log(page)
			setMovies(responseJson.Search);
  } 
  }

  useEffect(() => {
    getMovieData(searchValue);
    console.log(movieId)
  }, [searchValue,movieId]);

  return (
    <div className="App">
      <div className="row d-flex align-item-center mb-4">
        <NavBar searchvalue={searchValue} setSearchvalue={setSearchValue} />
      </div>
      <div className="row justify-content-center">
        {movieId && <SelectedMovie movieId={movieId} setMovieId={setMovieId}/>}
      </div>
      <div className="row">
        <MovieList 
        movies={movies}
        getMovieData = {getMovieData}
         page={page}
         prevPage =  {prevPage}
         NextPage = {NextPage}
         setMovieId = {setMovieId}
         />
      </div>

      
    </div>
  );
}

export default App;
