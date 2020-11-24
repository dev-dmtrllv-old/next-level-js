import React from "react";
import { TheoremPoints } from "data/theorem";
import { TheoremContext } from "./TheoremContext";

export const TheoremNextButton: React.FC = () =>
{
	const { results, theoremPageID, next } = React.useContext(TheoremContext);

	const resultsA = results[`${theoremPageID}A`];
	const resultsB = results[`${theoremPageID}B`];

	return (
		<button disabled={!resultsA && !resultsB} className="theorem-next-btn" onClick={next}>
			next
		</button>
	);
}

export type TheoremPointsButtonProps = {
	target: "A" | "B";
	points: TheoremPoints;
};
