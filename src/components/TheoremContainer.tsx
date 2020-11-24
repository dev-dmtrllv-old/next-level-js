import { theorems } from "data/theorem";
import React from "react"
import { View } from "views"
import { TheoremPointsButton } from "./TheoremPointsButton";
import { TheoremContext } from "./TheoremContext";

export const TheoremContainer: React.FC<TheoremPageProps> = ({ target }) =>
{
	const { theoremPageID } = React.useContext(TheoremContext);

	const ID = `${theoremPageID}${target}`;

	const text = theorems[ID];

	return (
		<View className="theorem-container">
			<h1>{text}</h1>
			<TheoremPointsButton points={1} target={target} />
			<TheoremPointsButton points={2} target={target} />
			<TheoremPointsButton points={3} target={target} />
		</View>
	);
}

type TheoremPageProps = {
	target: "A" | "B";
};
