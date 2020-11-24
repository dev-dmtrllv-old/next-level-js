import React from "react";
import { TheoremPoints } from "data/theorem";
import { View } from "views";
import { TheoremContext } from "./TheoremContext";

export const TheoremPointsButton: React.FC<TheoremPointsButtonProps> = ({ points, target }) =>
{
	const { updatePoints, results, theoremPageID } = React.useContext(TheoremContext);

	const handleClick = () => updatePoints(points, target);

	const p = results[`${theoremPageID}${target}`];

	return (
		<View className="theorem-points-btn" onClick={handleClick}>
			{points} {p >= points ? "active" : ""}
		</View>
	);
}

export type TheoremPointsButtonProps = {
	target: "A" | "B";
	points: TheoremPoints;
};
