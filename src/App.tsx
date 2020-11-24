import React from "react";
import { TheoremApp } from "components/TheoremApp";
import { TheoremProvider } from "components/TheoremProvider";

const App = () =>
{
	return (
		<TheoremProvider>
			<TheoremApp />
		</TheoremProvider>
	);
}

export default App;
