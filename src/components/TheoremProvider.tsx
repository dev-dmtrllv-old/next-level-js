import React from "react";

import { TheoremPoints, TheoremResults, THEOREM_MAX_PAGES, THEOREM_NOTIFICATION_TIME } from "data/theorem";
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

	const [showLeftTime, setShowLeftTime] = React.useState(false);
	const [isTimeUp, setIsTimeUp] = React.useState(Storage.getLeftTime() === 0);

	const timerInterval = React.useRef<NodeJS.Timeout>(null);

	const startTimer = () =>
	{
		if (!timerInterval.current) 
		{
			let startTime = Storage.getLeftTime();
			timerInterval.current = setInterval(() =>
			{
				const now = startTime--;
				Storage.setTimerValue(now);
				if (now === THEOREM_NOTIFICATION_TIME)
				{
					setShowLeftTime(true);
				}
				else if (now === 0)
				{
					clearInterval(timerInterval.current);
					setIsTimeUp(true);
				}
			}, 1000);
		}
	}

	const ctx: TheoremContextProps = {
		updatePoints: (points, target) =>
		{
			if (isTimeUp)
				return;

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
			if (nextID === 1) // we entered the first theorem page
			{
				startTimer();
			}
			else if (nextID === THEOREM_MAX_PAGES + 1) // we are passed the last page
			{
				clearInterval(timerInterval.current);
			}
			if (!isTimeUp)
			{
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
			}
		},
		retry: () => 
		{
			clearInterval(timerInterval.current);
			timerInterval.current = null;
			setCurrentPageID(0);
			setResults({});
			setIsTimeUp(false);
			Storage.clear();
		},
		hideTimerNotification: () => setShowLeftTime(false),
		showLeftTime,
		isTimeUp,
		toResults: () =>
		{
			const resultsPageId = THEOREM_MAX_PAGES + 1;
			setCurrentPageID(resultsPageId);
			Storage.setPageID(resultsPageId);
		}
	};

	React.useEffect(() =>
	{
		if (currentPageID > 0 && currentPageID < THEOREM_MAX_PAGES)
			startTimer();
	}, []);

	return (
		<TheoremContext.Provider value={ctx}>
			{children}
		</TheoremContext.Provider>
	);
}
