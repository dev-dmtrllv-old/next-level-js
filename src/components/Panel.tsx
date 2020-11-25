import React from "react"
import { getClassFromProps } from "utils/react";
import { View } from "views"

import "./styles/panel.scss";

export const Panel: React.FC<PanelProps> = ({ className, children, centerContent }) =>
{
	return (
		<View className={getClassFromProps("panel", { className, centerContent })}>
			{children}
		</View>
	);
}

type PanelProps = {
	className?: string;
	centerContent?: boolean;
};
