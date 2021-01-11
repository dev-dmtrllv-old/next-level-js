import React from "react";
import { TheoremContext } from "./TheoremContext";

export const TimeUpModal = () =>
{
	const { isTimeUp } = React.useContext(TheoremContext);

	if(isTimeUp)
		return (
			<h1>Time Is Up BOII!!</h1>
		);
	return null;
};
