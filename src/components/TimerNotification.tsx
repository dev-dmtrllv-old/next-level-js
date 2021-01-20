import React from "react";

import { TheoremContext } from "./TheoremContext";

export const TimerNotification = () =>
{
	const { showLeftTime, hideTimerNotification } = React.useContext(TheoremContext);

	if (showLeftTime)
		return (
			<div>
				Let op! Je hebt nog 5 minuten.
				<button onClick={hideTimerNotification}>close</button>
			</div>
		);
	return null;
};
