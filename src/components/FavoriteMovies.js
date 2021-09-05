import React, { useRef, useState } from "react";
import "../styles/FavoriteMovies.css";

function FavoriteMovies({ isOn }) {
  const [starFill, setStarFill] = useState(false);
  const posterEl = useRef(null);

  const starClick = () => {
    setStarFill(!starFill);
  };

  const target = (e) => {
    console.log(posterEl.cureent);
    const src = posterEl.current.currentSrc.slice(22);
    // const src = posterEl.current.currentSrc;
    console.log(src);
  };

  return (
    <div className={isOn ? "favorite" : "favorite_change"}>
      <div className="favorite_in">
        <div className={isOn ? "favorite_title" : "favorite_title_change"}>
          Popular Movies
        </div>

        <div onClick={(e) => target(e)} className="favorite_poster">
          <span onClick={starClick} className="favorite_star">
            {starFill ? (
              <span className="favorite_icon">★</span>
            ) : (
              <span className="favorite_icon">☆</span>
            )}
          </span>
          <img
            ref={posterEl}
            className="favorite_img"
            src="./Notebook.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FavoriteMovies;
