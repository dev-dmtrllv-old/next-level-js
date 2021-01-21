import React from "react";
import { View } from "views";

import LogoImg from "assets/img/logo.png";

import "./styles/logo.scss";

export const Logo = () =>
{
	return (
		<View className="logo">
			<a href="https://www.werk30.nl">
				<img src={LogoImg} alt="logo" />
			</a>
		</View>
	)
}
