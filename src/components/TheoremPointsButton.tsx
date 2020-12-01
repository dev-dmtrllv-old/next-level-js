import React from "react";
import { TheoremPoints } from "data/theorem";
import { getClassFromProps } from "utils/react";
import { View } from "views";
import { TheoremContext, TheoremTarget } from "./TheoremContext";
import { Heading } from "./Heading";

import "./styles/theorem-points-btn.scss";

export const TheoremPointsButton: React.FC<TheoremPointsButtonProps> = ({ points, target }) =>
{
	const { updatePoints, results, theoremPageID } = React.useContext(TheoremContext);

	const handleClick = () => updatePoints(points, target);

	const p = results[`${theoremPageID}${target}`];

	return (
		<View className={getClassFromProps("theorem-points-btn", { active: p >= points })} onClick={handleClick}>
			<View position="absolute" center>
				<Heading>{points}</Heading>
			</View>
		</View>
	);
}

export type TheoremPointsButtonProps = {
	target: TheoremTarget;
	points: TheoremPoints;
};
