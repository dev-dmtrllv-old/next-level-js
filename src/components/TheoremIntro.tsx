import React from "react";
import { View } from "views";
import { TheoremContext } from "./TheoremContext";

export const TheoremIntro = () =>
{
	const { next } = React.useContext(TheoremContext);

	return (
		<View id="theorem-intro">
			<h1>Intro</h1>
			<button onClick={next}>start</button>
		</View>
	);
}
