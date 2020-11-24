import React from "react";
import { TheoremContext } from "./TheoremContext";

export const TheoremResults = () =>
{
	const { results, retry } = React.useContext(TheoremContext);

	return (
		<>
			<h1>Results</h1>
			{JSON.stringify(results, null, 4)}
			<button onClick={retry}>retry</button>
		</>
	);
}
