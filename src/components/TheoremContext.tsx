import React from "react";

import { TheoremPoints, TheoremResults } from "data/theorem";

/**
 * This is the context that will provide all the functionality to update and retrieve data from the theorems state
 */
export const TheoremContext = React.createContext<TheoremContextProps>(null);

export type TheoremContextProps = {
	updatePoints: (points: TheoremPoints, target: TheoremTarget) => void;
	results: TheoremResults;
	theoremPageID: number;
	next: () => void;
	retry: () => void;
	showLeftTime: boolean;
	isTimeUp: boolean;
	hideTimerNotification: () => void;
	toResults: () => void;
};

export type TheoremTarget = "A" | "B";
