import React, { createContext, useState } from "react";

export const CryptoListContext = createContext();

export const CryptoListContextProvider = (props) => {
  const [cryptoList, setCryptoList] = useState([
    "bitcoin",
    "ethereum",
    "tether",
    "ripple",
    "bitcoin-cash",
    "chainlink",
  ]);

  const deleteCoin = (coin) => {
    setCryptoList(
      cryptoList.filter((element) => {
        return element !== coin;
      })
    );
  };

  return (
    <CryptoListContext.Provider value={{ cryptoList, deleteCoin }}>
      {props.children}
    </CryptoListContext.Provider>
  );
};
