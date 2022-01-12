import React from "react";
import * as ReactDOM from "react-dom";
import Pet from "./Pet";
import { SearchParams } from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktiel" />
      <Pet name="Dokdasdadasdasin" animal="Cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
