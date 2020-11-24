import { TheoremResults } from "data/theorem";

export namespace Storage
{
	const THEOREM_POINTS_KEY = "theorem_points";

	const getTheoremResultsObject = () => JSON.parse(localStorage.getItem(THEOREM_POINTS_KEY)) || {};

	/**
	 * Sets one or multiple theorem results in the local storage
	 * @param results the results which you want to update
	 */
	export const setTheoremResults = (results: TheoremResults) => 
	{
		let resultsObject = getTheoremResultsObject();
		resultsObject = { ...resultsObject, ...results };
		localStorage.setItem(THEOREM_POINTS_KEY, JSON.stringify(resultsObject));
	};

	/**
	 * Gets the results from the local storage for the given theorem id's 
	 * @param ids the id(s) from which theorems to retrieve the data from
	 */
	export const getTheoremResults = (ids: string | string[]): TheoremResults => 
	{
		const resultsObject = getTheoremResultsObject();
		ids = Array.isArray(ids) ? ids : [ids];
		const results: TheoremResults = {};
		ids.forEach((id) => results[id] = resultsObject[id] || 0);
		return results;
	};

	/**
	 * Removes all the theorem results from the local storage
	 */
	export const clearTheoremResults = () => localStorage.removeItem(THEOREM_POINTS_KEY);
}

(window as any).s = Storage; 
