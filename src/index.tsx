import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.scss";

let targetEl = document.getElementById("root");

// create the root element if it does not exists
if (!targetEl)
{
	targetEl = document.createElement("div");
	document.body.appendChild(targetEl);
	targetEl.classList.add("root");
}

// hydrate the app if there are already child elements
const method = targetEl.children.length > 0 ? "hydrate" : "render";

// hydrate or render the app
ReactDOM[method](<App />, targetEl);
