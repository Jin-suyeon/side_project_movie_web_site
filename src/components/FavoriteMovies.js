import React, { useState } from "react";
import "../styles/FavoriteMovies.css";

function FavoriteMovies() {
  const [starFill, setStarFill] = useState(false);

  const starClick = () => {
    setStarFill(!starFill);
  };

  const target = (e) => {
    console.log(e);
  };

  return (
    <div className="favorite">
      <div className="favorite_in">
        <div className="favorite_title">Popular Movies</div>

        <div onClick={(e) => target(e)} className="favorite_poster">
          <span onClick={starClick} className="favorite_star">
            {starFill ? (
              <span className="favorite_icon">★</span>
            ) : (
              <span className="favorite_icon">☆</span>
            )}
          </span>
          <img className="favorite_img" src="./Notebook.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FavoriteMovies;
