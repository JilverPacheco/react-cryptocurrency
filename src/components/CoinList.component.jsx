import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../api/coinGecko";

import { CryptoListContext } from "../context/CyptoList";
import LoadingScreen from "../pages/LoadingScreen.page";
import { Coin } from "./Coin.component";

export const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { cryptoList, deleteCoin } = useContext(CryptoListContext);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const { data } = await coinGecko.get("/coins/markets", {
        params: { vs_currency: "usd", ids: cryptoList.join(",") },
      });
      setCoins(data);
      setIsLoading(false);
    };
    if (cryptoList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [cryptoList]);
  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <ul className="coinlist list-group mt-2">
            {coins.map((coin) => (
              <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
