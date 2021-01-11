import { TheoremResults, THEOREM_MAX_TIME } from "data/theorem";

export namespace Storage
{
	const THEOREM_POINTS_KEY = "theorem_points";
	const THEOREM_ID = "theorem_id";
	const THEOREM_TIMER = "theorem_timer";

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
	 * Removes the results and page id from local storage
	 */
	export const clear = () => localStorage.clear();


	/**
	 * @returns the last visited theorem page id or 0 if there was no theorem visited or (MAX_THEOREM_PAGES + 1) if the user was at the result page
	 */
	export const getPageID = (): number => 
	{
		const id = localStorage.getItem(THEOREM_ID);
		if(typeof id === "string")
			return +id;
		return 0;
	};

	/**
	* @param id the last visited theorem page id
	*/
	export const setPageID = (id: number) => localStorage.setItem(THEOREM_ID, id.toString());

	/**
	 * @param time the remaining time
	 */
	export const setTimerValue = (time: number) => localStorage.setItem(THEOREM_TIMER, time.toString());

	/**
	 * @returns the remaining time
	 */
	export const getLeftTime = () => 
	{
		if(localStorage.getItem(THEOREM_TIMER) == null)
			localStorage.setItem(THEOREM_TIMER, THEOREM_MAX_TIME.toString());
		return +localStorage.getItem(THEOREM_TIMER);
	};
}
