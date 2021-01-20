import React from "react";
import { WithReactProps } from "views";

import "./styles/heading.scss";

export const Heading: React.FC<WithReactProps<HeadingProps, HTMLHeadingElement>> = ({ type = "header", ...props }) => React.createElement(type === "header" ? "h1" : "h2", { ...props });

type HeadingProps = {
	type?: "header" | "sub";
};
