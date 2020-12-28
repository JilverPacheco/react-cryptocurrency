import React from "react";
import { Link } from "react-router-dom";

export const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/crypto/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="coinlist-image" src={coin.image} alt="" />
        {/* <span className="text-decoration-none">{coin.low_24h}</span> */}
        <span className="text-decoration-none">{coin.current_price}</span>
        {/* <span className="text-decoration-none">{coin.high_24h}</span> */}
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          <i
            className={
              coin.price_change_percentage_24h < 0
                ? "fas fa-sort-down align-middle mr-1"
                : "fas fa-sort-up align-middle mr-1"
            }
          ></i>
          {coin.price_change_percentage_24h}
          <i
            onClick={(e) => {
              e.preventDefault();
              deleteCoin(coin.id);
            }}
            className="delete-icon fas fa-times align-middle mr-1"
          ></i>
        </span>
      </li>
    </Link>
  );
};
