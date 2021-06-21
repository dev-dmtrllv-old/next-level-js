import React from "react";

import { View, Container } from "views";

import { Logo } from "./Logo";
import { TheoremContext } from "./TheoremContext";

import "./styles/header.scss";

export const Header = () =>
{
	const { retry } = React.useContext(TheoremContext);

	return (
		<View id="header-wrapper">
			<View id="header" type="header" position="fixed">
				<Container fill>
					<Logo />
				</Container>
				<button style={{ position: "absolute", right: 25, top: "50%", transform: "translate(0%, -50%)" }} onClick={() => retry()}>reset</button>
			</View>
		</View>
	);
};
