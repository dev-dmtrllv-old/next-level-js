import { TheoremResults } from "data/theorem";

export namespace Storage
{
	const THEOREM_POINTS_KEY = "theorem_points";
	const THEOREM_LAST_ID = "theorem_id";

	/**
	 * @returns all the theorem results from storage
	 */
	export const getAllTheoremResults = (): TheoremResults => JSON.parse(localStorage.getItem(THEOREM_POINTS_KEY)) || {};

	/**
	 * Sets one or multiple theorem results in the local storage
	 * @param results the results which you want to update
	 */
	export const setTheoremResults = (results: TheoremResults) => 
	{
		let resultsObject = getAllTheoremResults();
		resultsObject = { ...resultsObject, ...results };
		localStorage.setItem(THEOREM_POINTS_KEY, JSON.stringify(resultsObject));
	};

	/**
	 * Gets the results from the local storage for the given theorem id's 
	 * @param ids the id(s) from which theorems to retrieve the data from
	 */
	export const getTheoremResults = (ids: string | string[]): TheoremResults => 
	{
		const resultsObject = getAllTheoremResults();
		ids = Array.isArray(ids) ? ids : [ids];
		const results: TheoremResults = {};
		ids.forEach((id) => results[id] = resultsObject[id] || 0);
		return results;
	};

	/**
	 * Removes all the theorem results from the local storage
	 */
	export const clearTheoremResults = () => localStorage.removeItem(THEOREM_POINTS_KEY);


	/**
	 * @returns the last visited theorem page id or -1 if there was no theorem visited or (MAX_THEOREM_PAGES + 1) if the user was at the result page
	 */
	export const getPageID = (): number => 
	{
		const id = localStorage.getItem(THEOREM_LAST_ID);
		if(typeof id === "string")
			return +id;
		return null;
	};

	/**
	* @param id the last visited theorem page id
	*/
	export const setPageID = (id: number) => localStorage.setItem(THEOREM_LAST_ID, id.toString());
}