import { capitalize } from "utils/string";
import { TheoremResults, THEOREM_MAX_PAGES } from "./theorem";

export const calculateResults = (results: TheoremResults | null) =>
{
	if(Object.keys(results).length <= 0)
		return { x: null, y: null };

	let O = 0;
	let G = 0;
	let D = 0;
	let I = 0;

	let lastOG: "O" | "G" = "O";
	let lastID: "I" | "D" = "D";

	for (let i = 1; i <= THEOREM_MAX_PAGES; i++)
	{
		const a = results[i + "A"];
		const b = results[i + "B"];

		if (a || b) // optimalization
		{
			if (i % 2 === 0) // even means target (i or d array)
			{
				if (i % 4 === 0) // 4, 8, 12, 16 etc
				{
					D += a;
					I += b;
					lastID = a > b ? "D" : "I";
				}
				else // 2, 6, 10, 14 etc ()
				{
					D += b;
					I += a;
					lastID = a > b ? "I" : "D";
				}
			}
			else // odd means target (o or g)
			{
				if ((i + 1) % 4 === 0) // 3,7,11,15 etc (put a into G, and put A into G)
				{
					G += a;
					O += b;
					lastOG = a > b ? "G" : "O";
				}
				else // 1, 5, 9, 13 etc
				{
					G += b;
					O += a;
					lastOG = a > b ? "O" : "G";
				}
			}
		}
	}

	let x = 0;
	let y = 0;

	if (O > G)
		y = O;
	else if (G > O)
		y = -G;

	if (I > D)
		x = I;
	else if (D > I)
		x = -D;

	let type = "";

	// extrapolation fix for zero cases
	{
		if (x === 0)
			x = lastID === "D" ? 13 : -13;

		if (y === 0)
			y = lastOG === "G" ? -13 : 13;
	}

	if (x < 0 && y < 0)
	{
		type = "Regisseur - Dominant"
	}
	else if (x < 0 && y > 0)
	{
		type = "Motivator - Invloed";
	}
	else if (x > 0 && y < 0)
	{
		type = "Analyticus - Consequent"
	}
	else if (x > 0 && y > 0)
	{
		type = "Zorger - Stabiel";
	}

	let subType = "";

	if (x < -20.5 || (x > 0 && x < 20.5))
	{
		if (y < -20.5)
		{
			subType = "regisserend";
		}
		else if (y < 0)
		{
			subType = "motiverend";
		}
		else if (y > 20.5)
		{
			subType = "motiverend";
		}
		else
		{
			subType = "regisserend";
		}
	}
	else if (x < 0 || x > 20.5)
	{
		if (y < -20.5)
		{
			subType = "analytisch";
		}
		else if (y < 0)
		{
			subType = "zorgende";
		}
		else if (y > 20.5)
		{
			subType = "zorgende";
		}
		else
		{
			subType = "analytische";
		}

	}

	return {
		type: `${capitalize(subType)} ${capitalize(type)}`,
		x, y
	};
}
