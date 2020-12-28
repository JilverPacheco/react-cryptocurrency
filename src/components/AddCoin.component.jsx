import React, { useContext, useState } from "react";
import { CryptoListContext } from "../context/CyptoList";

export const AddCoin = () => {
  const [show, setShow] = useState(false);
  const { addCoin } = useContext(CryptoListContext);

  const avaliableCoinList = [
    "bitcoin",
    "ethereum",
    "tether",
    "ripple",
    "bitcoin-cash",
    "binancecoin",
    "cardano",
    "polkadot",
    "usd-coin",
    "bitcoin-cash-sv",
    "wrapped-bitcoin",
    "chainlink",
    "litecoin",
    "tezos",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setShow(!show);
  };
  return (
    <div className="dropdown">
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
      >
        Add new crypto currency
      </button>
      <div className={show ? "dropdown-menu show" : "dropdown-menu"}>
        {avaliableCoinList.map((coin) => {
          return (
            <p
              onClick={() => handleClick(coin)}
              className="dropdown-item link-p"
            >
              {coin}
            </p>
          );
        })}
      </div>
    </div>
  );
};
