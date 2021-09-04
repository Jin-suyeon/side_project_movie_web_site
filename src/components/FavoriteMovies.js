import React, { useState } from "react";
import "../styles/FavoriteMovies.css";

function FavoriteMovies() {
  const [starFill, setStarFill] = useState(false);

  const starClick = () => {
    setStarFill(!starFill);
  };

  console.log(starFill);
  return (
    <div className="favorite">
      <div className="favorite_in">
        <div className="favorite_title">Popular Movies</div>

        <div className="favorite_poster">
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
