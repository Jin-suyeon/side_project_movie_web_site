import React from "react";
import "../styles/Main.css";

function Main() {
  return (
    <main>
      <div id="main_in">
        <div id="main_text">
          <span>보고 싶은 영화를 즐겨찾기 해보세요</span>
          <button>체험하기</button>
        </div>
        <div id="main_Banner_black_opacity" />
        <img id="main_Banner_img" src="./Main_Banner.jpeg" alt="" />
      </div>
    </main>
  );
}

export default Main;
