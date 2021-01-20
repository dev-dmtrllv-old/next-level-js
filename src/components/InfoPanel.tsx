import React from "react"

import { info } from "data/theorem";
import { Heading } from "views";

import { Panel } from "./Panel";

export const InfoPanel = () =>
{
	return (
		<Panel className="info-panel">
			<Heading type="sub">{info}</Heading>
		</Panel>
	);
}
