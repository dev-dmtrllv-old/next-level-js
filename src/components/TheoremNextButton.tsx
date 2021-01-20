import React from "react";

import { TheoremPoints } from "data/theorem";

import { TheoremContext } from "./TheoremContext";

import { Button } from "views/Button";

export const TheoremNextButton: React.FC = () =>
{
	const { results, theoremPageID, next } = React.useContext(TheoremContext);

	const resultsA = results[`${theoremPageID}A`];
	const resultsB = results[`${theoremPageID}B`];

	const isDisabled = !resultsA && !resultsB;

	return (
		<Button type={isDisabled ? "secundary" : "primary"} disabled={!resultsA && !resultsB} className="theorem-next-btn" onClick={next}>
			Volgende
		</Button>
	);
}

export type TheoremPointsButtonProps = {
	target: "A" | "B";
	points: TheoremPoints;
};
