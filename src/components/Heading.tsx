import React from "react";
import { WithReactProps } from "views";

import "./styles/heading.scss";

export const Heading: React.FC<WithReactProps<HeadingProps, HTMLHeadingElement>> = ({ size, ...props }) => React.createElement(`h${size}`, { ...props });

type HeadingProps = {
	size: number;
};
