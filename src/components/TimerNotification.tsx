import React from "react";
import { TheoremContext } from "./TheoremContext";

export const TimerNotification = () =>
{
	const { showLeftTime, hideTimerNotification } = React.useContext(TheoremContext);

	if (showLeftTime)
		return (
			<div>
				You have 5 min left boii
				<button onClick={hideTimerNotification}>close</button>
			</div>
		);
	return null;
};
