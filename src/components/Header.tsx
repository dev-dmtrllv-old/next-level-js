import React from "react";

import { View, Container } from "views";

import { Logo } from "./Logo";

import "./styles/header.scss";
import { TheoremContext } from "./TheoremContext";

export const Header = () =>
{
	const { retry } = React.useContext(TheoremContext);
	return (
		<View id="header-wrapper">
			<View id="header" type="header" position="fixed">
				<Container fill>
					<Logo />
				</Container>
				<button onClick={retry} style={{ position: "absolute", right: 15, top: 15 }}>reset</button>
			</View>
		</View>
	);
};
