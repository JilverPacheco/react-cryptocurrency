import React from "react";

import { AddCoin } from "../components/AddCoin.component";
import { CoinList } from "../components/CoinList.component";
import { Header } from "../components/Header.component";
import Fade from "react-reveal/Fade";

const CoinSummary = () => {
  return (
    <Fade>
      <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
        <Header />
        <AddCoin />
        <CoinList />
      </div>
    </Fade>
  );
};

export default CoinSummary;
