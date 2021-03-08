import React from "react";

import { View, Container } from "views";

import { Logo } from "./Logo";

import "./styles/header.scss";

export const Header = () =>
{
	return (
		<View id="header-wrapper">
			<View id="header" type="header" position="fixed">
				<Container fill>
					<Logo />
				</Container>
			</View>
		</View>
	);
};
