import React from "react";
import { getClassFromProps } from "utils/react";
import { Button } from "./Button";
import { View } from "./View";

import "./styles/dropdown.scss";

export const DropdownButton: React.FC<DropdownButtonProps> = ({ className, items, initIndex = 0 }) =>
{
	const [isShown, setShown] = React.useState(false);
	const [activeIndex, setActiveIndex] = React.useState(initIndex);

	const handleClick = () => setShown(!isShown);

	React.useEffect(() => 
	{
		const fn = () => { console.log(isShown); if(isShown) setShown(false); }
		window.addEventListener("click", fn);
		return () => window.removeEventListener("click", fn);
	}, [isShown]);

	

	React.useEffect(() => 
	{
		window.document.body.style.overflow = "hidden";
		return () => 
		{
			window.document.body.style.overflow = "hidden";
		};
	}, []);

	return (
		<Button type="secundary" className={getClassFromProps("dropdown-btn", { className, isShown })} onClick={handleClick}>
			{items[activeIndex].text} &#9947;
			<View position="absolute" className="dropdown">
				{items.map((item, i) => 
				{
					if (i == activeIndex)
						return null;

					return (
						<View className="item" key={i} onClick={() => { setActiveIndex(i); item.action();  }}>
							{item.text}
						</View>
					)
				})}
			</View>
		</Button>
	)
}

export type DropdownItem = {
	text: string;
	action: () => any;
};

type DropdownButtonProps = {
	items: DropdownItem[];
	className?: string;
	id?: string;
	initIndex?: number;
};
