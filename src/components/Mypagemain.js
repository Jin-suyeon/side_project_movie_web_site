import React from "react";
import { popularMovies } from "../assets/popularMovies";
import "../styles/Mypagemain.css";

function Mypagemain({ isOn }) {
  return (
    <div className={isOn ? "Mypagemain" : "Mypagemain_change"}>
      <div className="Mypagemain_in">
        <h1>Horror</h1>
        <div className="Mypagemain_poster">
          {popularMovies.movies.map((movie) => (
            <div className="Mypagemain_poster_in">
              <img
                className={
                  isOn
                    ? "Mypagemain_poster_img"
                    : "Mypagemain_poster_img_change"
                }
                src={movie.img}
                alt=""
              />
              <div>{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mypagemain;
