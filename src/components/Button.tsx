import React from "react";
import { getClassFromProps } from "utils/react";
import { WithReactProps } from "views";

import "./styles/button.scss";

const btn_blur = (e: React.MouseEvent) => 
{
	const t = e.target as HTMLButtonElement;
	setTimeout(() => t.blur(), 50);
};

export const Button: React.FC<ButtonProps> = ({ disabled, type, onClick, className, ...props }) => 
{
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
	{
		onClick && onClick(e);
		btn_blur(e);
	}

	return (
		<button disabled={disabled} className={getClassFromProps("btn", { [type]: true, disabled, className })} {...props} onClick={handleClick} />
	);
};


type ButtonProps = WithReactProps<{
	disabled?: boolean;
	type: "primary" | "secundary" | "tertiary";
}, HTMLButtonElement>;
