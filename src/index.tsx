import App from "app";
import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

let targetEl = document.getElementById("root");

if(!targetEl)
{
	targetEl = document.createElement("div");
	document.body.appendChild(targetEl);
	targetEl.classList.add("root");
}

// hydrate the app if there are already child elements
const method = targetEl.children.length > 0 ? "hydrate" : "render";

ReactDOM[method](<App />, targetEl);
