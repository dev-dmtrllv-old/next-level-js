import React from "react";
import { TheoremContext } from "./TheoremContext";

export const TheoremIntro = () =>
{
	const { next } = React.useContext(TheoremContext);

	return (
		<>
			<h1>Intro</h1>
			<button onClick={next}>start</button>
		</>
	);
}
