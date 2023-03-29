import React from "react";
import Banner from "../Banner1/banner";
import Card2 from "../Card2/card2";
import ChoicesButtons from "../FirstChoiceMenWomenetc/choicesButtons";
import Card1 from "../Card1/card1";
import Banner3 from "../Banner3/banner3";
import Magzine from "../Magzines/magzine";
import NextPageNavBar from "../nextPage1NavBar/nextPageNavBar";

export default function NextPage1() {
  return (
    <div>
      <NextPageNavBar />
      <Card1 />
      <Card2 />
      <Banner />
      <ChoicesButtons />
      <Banner3 />
      <Magzine />
    </div>
  );
}
