import React from "react";
import { TheoremPoints, TheoremResults, THEOREM_MAX_PAGES } from "data/theorem";
import { Storage } from "services/storage";
import { clamp } from "utils/math";

import { TheoremContext, TheoremContextProps } from "./TheoremContext";

/**
 * This is the root component for the theorem app.
 * It will handle the whole theorem app's state.
 */
export const TheoremProvider: React.FC = ({ children }) => 
{
	const [results, setResults] = React.useState<TheoremResults>(Storage.getAllTheoremResults());

	const [currentPageID, setCurrentPageID] = React.useState<number>(Storage.getPageID());

	const ctx: TheoremContextProps = {
		updatePoints: (points, target) =>
		{
			const clampedPoints = clamp(points, 0, 3) as TheoremPoints;
			const oppositeTarget = target === "A" ? "B" : "A";
			const newResults = {
				...results,
				[`${currentPageID}${target}`]: clampedPoints,
				[`${currentPageID}${oppositeTarget}`]: (3 - clampedPoints) as TheoremPoints
			}
			setResults(newResults);
			Storage.setTheoremResults(newResults);
		},
		results,
		theoremPageID: currentPageID,
		next: () =>
		{
			const nextID = currentPageID + 1;
			if (nextID <= THEOREM_MAX_PAGES)
			{
				setCurrentPageID(nextID);
				Storage.setPageID(nextID);
			}
			else
			{
				setCurrentPageID(nextID)
				Storage.setPageID(nextID);
				console.log("finished", results);
			}
		},
		retry: () => 
		{
			setCurrentPageID(0);
			setResults({});
			Storage.clear();
		}
	};

	return (
		<TheoremContext.Provider value={ctx}>
			{children}
		</TheoremContext.Provider>
	);
}
