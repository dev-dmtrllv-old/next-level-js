import React from "react";
import { TheoremApp } from "components/TheoremApp";
import { TheoremProvider } from "components/TheoremProvider";
import { Header } from "components/Header";

const App = () =>
{
	return (
		<TheoremProvider>
			<Header />
			<TheoremApp />
		</TheoremProvider>
	);
}

export default App;

const autoRun = () =>
{
	let i = 1;
	const interval = setInterval(() => 
	{
		if (i > 18)
			clearInterval(interval);
		else
		{
			try
			{

				const btns: HTMLButtonElement[] = Array.from(document.getElementsByClassName("theorem-points-btn")) as any;

				const r = Math.floor(Math.random() * 6);

				btns[r].click();

				setTimeout(() => 
				{
					(Array.from(document.getElementsByClassName("theorem-next-btn"))[0] as HTMLButtonElement).click();
					console.log(i++);
				}, 100);

			}
			catch(e)
			{
				clearInterval(interval);
			}
		}
	}, 500);
}

// autoRun();
