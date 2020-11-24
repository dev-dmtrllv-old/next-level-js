import { TheoremApp } from "components/TheoremApp";
import { TheoremProvider } from "components/TheoremProvider";
import React from "react";

const App = () =>
{
	return (
		<TheoremProvider>
			<TheoremApp />
		</TheoremProvider>
	);
}

export default App;
