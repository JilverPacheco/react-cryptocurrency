import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CryptoListContextProvider } from "../context/CyptoList";
import CoinDetail from "../pages/CoinDetail.component";
import CoinSummary from "../pages/CoinSummary.component";

export const Routes = () => {
  return (
    <CryptoListContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CoinSummary} />
          <Route exact path="/crypto/:id" component={CoinDetail} />
        </Switch>
      </BrowserRouter>
    </CryptoListContextProvider>
  );
};
