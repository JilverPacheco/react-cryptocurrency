import React, { createContext, useEffect, useState } from "react";

export const CryptoListContext = createContext();

export const CryptoListContextProvider = (props) => {
  const [cryptoList, setCryptoList] = useState(
    localStorage.getItem("CryptoList").split(",") || [
      "bitcoin",
      "ethereum",
      "tether",
    ]
  );
  useEffect(() => {
    localStorage.setItem("CryptoList", cryptoList);
  }, [cryptoList]);

  const addCoin = (coin) => {
    if (cryptoList.indexOf(coin) === -1) {
      setCryptoList([...cryptoList, coin]);
    }
  };

  const deleteCoin = (coin) => {
    setCryptoList(
      cryptoList.filter((element) => {
        return element !== coin;
      })
    );
  };

  return (
    <CryptoListContext.Provider value={{ cryptoList, deleteCoin, addCoin }}>
      {props.children}
    </CryptoListContext.Provider>
  );
};
