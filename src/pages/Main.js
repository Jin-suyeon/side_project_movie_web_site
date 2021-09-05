import React from "react";
import FavoriteMovies from "../components/FavoriteMovies";
import "../styles/Main.css";

function Main({ isOn }) {
  return (
    <main>
      <div id="main_in">
        <div id={isOn ? "main_text" : "main_text_change"}>
          <div id="main_title">스타워즈: 라이즈 오브 스카이워커</div>
          <div id="main_story">
            더욱 강력해진 포스로 돌아온 ‘레이’는 전 우주를 어둠의 힘으로
            <br />
            지배하려는 ‘카일로 렌’에게 대적할 유일한 히로인으로 거듭난다.
            <br /> 미래의 지배하려는 ‘카일로 렌’에게 대적할 유일한 히로인으로
            거듭난다. <br />
            미래의 운명을 쥔 ‘레이’는 든든한 조력자이자 친구인 ‘핀’, ‘포’와 함께
            새로운 미래를 위한 험난한 여정을 떠나고,
            <br /> 선과 악의 거대한 전쟁을 마주하게 된다. 또한 ‘카일로 렌’과의
            피할 수 없는 운명적 대결을 펼치게 되는데… <br />
            전쟁을 끝내고 새로운 전설로 탄생할 선택받은 영웅은 누가 될 것인가?!
          </div>
        </div>
        {isOn ? null : <div id="main_Banner_black_opacity" />}
        <div id={isOn ? "main_Banner_img" : "main_Banner_img_change"} />
      </div>
      <FavoriteMovies isOn={isOn} />
    </main>
  );
}

export default Main;
