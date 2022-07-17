import React from "react";
import "./Selectedmovie.css";
import { useEffect, useState } from "react";
export const SelectedMovie = (props) => {
  const [selectedmovie, setSelectedmovie] = useState();
  const id = props.movieId;

  const getMovieData = async (id) => {
    const api = `https://www.omdbapi.com/?i=${id}&apikey=e7bf9e21`;

    const fetchdata = await fetch(api);
    const moviedata = await fetchdata.json();
    setSelectedmovie(moviedata);
    // console.log(selectedmovie);
  };
  useEffect(() => {
    getMovieData(id);
  }, [id]);

  return (
    <div className="row SelectedMovie justify-content-around p-4">
      <div className="col container Icontainer d-flex justify-content-center p-4">
        <div className="col">
          <img src={selectedmovie?.Poster} className="selected-img"/>
        </div>
        <div className="row container IIcontainer">

        <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Title: </p> { selectedmovie?.Title} </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Genre: </p> { selectedmovie?.Genre} </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Released: </p> { selectedmovie?.Released} </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Length: </p> { selectedmovie?.Runtime} </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Cast: </p> { selectedmovie?.Actors} </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Directed by: </p> { selectedmovie?.Director} </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> <p className="Heading">Plot: </p> <p className="plot">{ selectedmovie?.Plot}</p> </span>
          </div>

          <div className="row row-col">
            <span className="detail-line"> 

            <p className="Heading">imdb Ratings: </p> <p>{ selectedmovie?.imdbRating}/10</p> 
            </span>
          </div>
          </div>

          <p className="detail-line close-tag" onClick={()=>props.setMovieId('')}>X</p>
      </div>

      <span className="footbar"></span>
    </div>
  );
};
