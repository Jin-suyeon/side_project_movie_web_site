import React from "react";
import Mypagemain from "../components/Mypagemain";
import "../styles/Mypage.css";

function Mypage({ isOn }) {
  return (
    <div className={isOn ? "Mypage" : "Mypage_change"}>
      <div className="Mypage_in">
        <div className={isOn ? "Mypage_Side_bar" : "Mypage_Side_bar_change"}>
          <div className="Mypage_profile">
            <img src="/woman.jpeg" alt="" />
            <div>My name</div>
          </div>
          <div className={isOn ? "Mypage_menu" : "Mypage_menu_change"}>
            <span>Horror</span>
            <span>Comedy</span>
            <span>Romance</span>
            <span>Drama</span>
            <span>Documentary</span>
            <span>Action</span>
            <span>Animation</span>
            <div />
          </div>
          <div className={isOn ? "Mypage_logout" : "Mypage_logout_change"}>
            <button>Logout</button>
          </div>
        </div>
        <div className="Mypage_main_page">
          <Mypagemain isOn={isOn} />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
