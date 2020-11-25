import { THEOREM_MAX_PAGES } from "data/theorem";
import React from "react";
import { View } from "views";
import { TheoremContainer } from "./TheoremContainer";
import { TheoremContext } from "./TheoremContext";
import { TheoremIntro } from "./TheoremIntro";
import { TheoremNextButton } from "./TheoremNextButton";
import { TheoremResults } from "./TheoremResults";

export const TheoremApp: React.FC = () => 
{
	const { theoremPageID } = React.useContext(TheoremContext);
	
	if(theoremPageID === 0) // app was never loaded before
	{
		return (
			<View>
				<TheoremIntro />
			</View>
		)
	}
	else if(theoremPageID > THEOREM_MAX_PAGES) // app was finished
	{
		return (
			<View>
				<TheoremResults />
			</View>
		)
	}
	else
	{
		return (
			<View className="theorem-app">
				<TheoremContainer target="A" />
				<br />
				<TheoremContainer target="B" />
				<br />
				<TheoremNextButton />
			</View>
		);
	}
}
