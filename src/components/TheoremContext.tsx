import { TheoremPoints, TheoremResults, theorems } from "data/theorem";
import React from "react";

/**
 * This is the context that will provide all the functionality to update and retreive data from the theorems state
 */
export const TheoremContext = React.createContext<TheoremContextProps>(null);

export type TheoremContextProps = {
	updatePoints: (points: TheoremPoints, target: "A" | "B") => void;
	results: TheoremResults;
	theoremPageID: number;
	next: () => void;
	retry: () => void;
};
