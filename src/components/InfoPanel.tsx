import { info } from "data/theorem";
import React from "react"
import { Heading } from "./Heading";
import { Panel } from "./Panel";

export const InfoPanel = () =>
{
	return (
		<Panel className="info-panel">
			<Heading type="sub">{info}</Heading>
		</Panel>
	);
}
