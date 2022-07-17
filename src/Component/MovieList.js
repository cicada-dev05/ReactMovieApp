import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  return (
    <div className="MovieList">
      {props.movies &&
        props.movies.length > 0 &&
        props.movies.map((movie, index) => (
          <div key={index} className="image-container row-col-md-5 m-3">
            <img
              src={movie.Poster}
              onClick={()=>props.setMovieId(movie.imdbID)}
              className="card-img"
              alt="movie"
            ></img>
          </div>
        ))}

      <div className="buttons-prev-forward d-flex justify-content-around">
        <div className="prev">
          <button
            className="btn"
            disabled={props.page <= 1}
            onClick={props.prevPage}
            style={{ background: "#EB5E28" }}
          >
            Prev
          </button>
        </div>
        <div className="display-page" style={{ color: "#CCC5B9" }}>
          {props.page}
        </div>
        <div className="forw">
          <button
            className="btn "
            onClick={props.NextPage}
            disabled={Math.ceil(
              props.page + 1 > props.movies.totalResults / 12
            )}
            style={{ background: "#EB5E28" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
