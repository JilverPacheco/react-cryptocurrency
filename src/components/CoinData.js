import React from "react";

export const CoinData = ({ data }) => {
  return (
    <div>
      {data && (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                lowest value in 24h
              </span>
              <span className="text-danger">${data.low_24h}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                % Change in 24h
              </span>
              <span
                className={
                  data.price_change_percentage_24h < 0
                    ? "text-danger"
                    : "text-success"
                }
              >
                {data.price_change_percentage_24h.toFixed(3)}%
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Actual price
              </span>
              <span>${data.current_price}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Market cap change in 24h
              </span>
              <span>{data.market_cap_change_24h.toFixed(3)}</span>
            </div>

            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Change in 24h
              </span>
              <span
                className={
                  data.price_change_24h < 0 ? "text-danger" : "text-success"
                }
              >
                {data.price_change_24h}
              </span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                highest value in 24h
              </span>
              <span className="text-success">${data.high_24h}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Market cap % change in 24h
              </span>
              <span
                className={
                  data.market_cap_change_percentage_24h < 0
                    ? "text-danger"
                    : "text-success"
                }
              >
                {data.market_cap_change_percentage_24h.toFixed(3)}%
              </span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
