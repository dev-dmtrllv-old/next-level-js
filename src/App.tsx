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
