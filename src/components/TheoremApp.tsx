import React from "react";
import { View } from "views";
import { TheoremContainer } from "./TheoremContainer";
import { TheoremNextButton } from "./TheoremNextButton";

export const TheoremApp: React.FC = () => 
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
