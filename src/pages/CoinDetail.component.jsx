import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import coinGecko from "../api/coinGecko";
import { HistoryChart } from "../components/HistoryChart.component";
import LoadingScreen from "./LoadingScreen.page";
import Fade from "react-reveal/Fade"
import { CoinData } from "../components/CoinData.component";

const CoinDetail = () => {
  const { id } = useParams();
  const [cryptoData, setcryptoData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [resDay, resWeek, resMonth, resYear, detail] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: { vs_currency: "usd", days: "1" },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: { vs_currency: "usd", days: "7" },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: { vs_currency: "usd", days: "30" },
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: { vs_currency: "usd", days: "365" },
        }),
        coinGecko.get("/coins/markets", {
          params: { vs_currency: "usd", ids: id },
        }),
      ]);

      setcryptoData({
        day: formatData(resDay.data.prices),
        week: formatData(resWeek.data.prices),
        month: formatData(resMonth.data.prices),
        year: formatData(resYear.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  const rendeData = () => {
    return (
      <div>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Fade>
            <div className="coinlist">
              <HistoryChart data={cryptoData} />
              <CoinData data={cryptoData.detail} />
            </div>
          </Fade>
        )}
      </div>
    );
  };
  return rendeData();
};

export default CoinDetail;
