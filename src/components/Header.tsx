import React from "react";
import { View } from "views";
import { Container } from "./Container";
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
