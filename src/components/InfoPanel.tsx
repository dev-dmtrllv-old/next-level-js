import { info } from "data/theorem";
import React from "react"
import { View } from "views"
import { Panel } from "./Panel";

export const InfoPanel = () =>
{
	return (
		<Panel className="info-panel">
			<h2>{info}</h2>
		</Panel>
	);
}
