import React from "react";
import ReactDOM from "react-dom/client";


// JSX => React.createElement (Babel is used to do this) => React element object => render(element) to render it as html
const heading = <h1 id="heading">Practice React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);