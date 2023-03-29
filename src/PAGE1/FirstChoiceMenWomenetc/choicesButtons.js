import React, { useState } from "react";
import BabyCard3 from "../BabyChoiceOption/babyCard3";
import DividedCard3 from "../DividedChoiceOption/dividedCard3";
import HomeCard3 from "../HomeChoiceOption/homeCard3";
import KidsCard3 from "../KidsChoiceOption/kidsCard3";
import Card3Men from "../MenChoiceOption/card3Men";
import WomenCard3 from "../WomenChoiceOption/womenCard3";
import "./choicesButtons.css";

export default function ChoicesButtons() {
  const [active, setActive] = useState("MenButton");

  return (
    <div>
      <div className="buttons-choice">
        <button
          type="button"
          onClick={() => setActive("MenButton")}
          className="btn btn-light ms-5 choiceButton"
        >
          Mens
        </button>
        <button
          type="button"
          onClick={() => setActive("LadiesButton")}
          className="btn btn-light ms-4 choiceButton"
        >
          Ladies
        </button>
        <button
          type="button"
          onClick={() => setActive("BabyButton")}
          className="btn btn-light ms-4 choiceButton"
        >
          Baby
        </button>
        <button
          type="button"
          onClick={() => setActive("KidsButton")}
          className="btn btn-light ms-4 choiceButton"
        >
          Kids
        </button>
        <button
          type="button"
          onClick={() => setActive("DividedButton")}
          className="btn btn-light ms-4 choiceButton"
        >
          Divided
        </button>
        <button
          type="button"
          onClick={() => setActive("HomeButton")}
          className="btn btn-light ms-4 choiceButton"
        >
          Home
        </button>
      </div>
      <div>
        {active === "MenButton" && <Card3Men />}
        {active === "LadiesButton" && <WomenCard3 />}
        {active === "BabyButton" && <BabyCard3 />}
        {active === "KidsButton" && <KidsCard3 />}
        {active === "DividedButton" && <DividedCard3 />}
        {active === "HomeButton" && <HomeCard3 />}
      </div>
    </div>
  );
}
