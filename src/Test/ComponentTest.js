import react from "react";
import ReactDom from "react-dom";

import Home from "../Routs/Home";

test("Component Renderd!", () => {
  const root = document.createElement("div");
  ReactDom.render(<Home />, root);
});
