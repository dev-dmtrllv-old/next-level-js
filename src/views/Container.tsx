import React from "react";
import { getClassFromProps } from "utils/react";
import { View } from "views";

import "./styles/container.scss";

export const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => (
	<View className={getClassFromProps("container", { className })} {...props}>
		{children}
	</View>
);

type ContainerProps = {
	id?: string;
	className?: string;
	fill?: boolean;
};
