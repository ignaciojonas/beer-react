import React from "react";
import BeerList from "./beers/BeerList";
import BeerCreate from "./beers/BeerCreate";
const App = () => {
  return (
    <div className="container mx-auto">
      <BeerList />
      <BeerCreate />
    </div>
  );
};

export default App;
