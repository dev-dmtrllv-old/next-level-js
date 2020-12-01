import React from "react";
import { View, FlexBox, FlexItem } from "views";
import { TheoremTarget } from "./TheoremContext";

import { TheoremPointsButton } from "./TheoremPointsButton";

export const TheoremButtonGroup: React.FC<TheoremButtonGroupProps> = ({ target }) =>
{
	return (
		<View className="btn-group">
			<View position="absolute" center="vertical" fill>
			<FlexBox reversed={target === "A"} fill>
				<FlexItem>
					<TheoremPointsButton points={1} target={target} />
				</FlexItem>
				<FlexItem>
					<TheoremPointsButton points={2} target={target} />
				</FlexItem>
				<FlexItem>
					<TheoremPointsButton points={3} target={target} />
				</FlexItem>
			</FlexBox>
			</View>
		</View>
	);
};

type TheoremButtonGroupProps = {
	target: TheoremTarget;
};
