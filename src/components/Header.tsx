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
				<a onClick={retry} style={{ position: "fixed", right: 0, top: 0, padding: "15px" }}>reset</a>
			</View>
		</View>
	);
};
