import React, { useRef, useState } from "react";
import "../styles/PopularMovies.css";
import { popularMovies } from "../assets/popularMovies";

function PopularMovies({ isOn }) {
  const [starFill, setStarFill] = useState(
    new Array(popularMovies.movies.length).fill(false)
  );
  const posterEl = useRef(null);

  const starClick = (numIdx) => {
    setStarFill(
      starFill.map((el, idx) => {
        return numIdx === idx ? !el : el;
      })
    );
  };

  return (
    <div className={isOn ? "favorite" : "favorite_change"}>
      <div className="favorite_in">
        <div className={isOn ? "favorite_title" : "favorite_title_change"}>
          Popular Movies
        </div>

        <div className="favorite_poster">
          {popularMovies.movies.map((movie, idx) => (
            <div onClick={() => starClick(idx)}>
              <span onClick={starClick} className="favorite_star">
                {starFill[idx] ? (
                  <span className="favorite_icon">★</span>
                ) : (
                  <span className="favorite_icon">☆</span>
                )}
              </span>
              <img
                ref={posterEl}
                className="favorite_img"
                src={movie.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularMovies;
