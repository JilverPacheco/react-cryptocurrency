import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

import { historyOptions } from "../chart/chartConfig";
import { Link } from "react-router-dom";

export const HistoryChart = ({ data }) => {
  const { day, week, month, year, detail } = data;
  const chartRef = useRef();
  const [timeFormat, setTimeFormat] = useState("24h");

  const DetermineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "30d":
        return month;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name}`,
              data: DetermineTimeFormat(),
              backgroundColor: "rgba( 0,0,0,0.7)",
              borderColor: "rgba(30,30,30,1)",
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: historyOptions,
      });
    }
  }, [DetermineTimeFormat, detail]);

  return (
    <div className="bg-white border mt-2 rounded p-3">
      <Link className="link" to="/">
        <i className="fas fa-arrow-left"></i> Volver
      </Link>
      <div>
        <canvas ref={chartRef} id="mychart" width={250} height={250}></canvas>
      </div>
      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm"
        >
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary m-2 btn-sm"
        >
          7d
        </button>
        <button
          onClick={() => setTimeFormat("30d")}
          className="btn btn-outline-secondary m-2 btn-sm"
        >
          30d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary m-2 btn-sm"
        >
          1y
        </button>
      </div>
    </div>
  );
};
