import React from "react";
import { FlexBox, FlexItem, View } from "views";
import { THEOREM_MAX_PAGES } from "data/theorem";
import { loopMap } from "utils/array";
import { getClassFromProps } from "utils/react";

import { Container } from "./Container";
import { TheoremContext } from "./TheoremContext";
import { Heading } from "./Heading";

import "./styles/track-list.scss";

export const TrackList = () =>
{
	const { theoremPageID, results } = React.useContext(TheoremContext);

	return (
		<View className="track-list">
			<Container fill>
				<FlexBox dir="vertical" fill>
					<FlexItem>
						<View center>
							<Heading type="sub">{theoremPageID} / {THEOREM_MAX_PAGES}</Heading>
						</View>
					</FlexItem>
					<FlexItem className="track-list-row">
						<View center="vertical">
							<FlexBox dir="horizontal" className="list">
								{loopMap(THEOREM_MAX_PAGES, (i) => 
								{
									const index = i + 1;
									const active = index <= theoremPageID;
									const current = index === theoremPageID;
									const isEmpty = !results[theoremPageID + "A"] && !results[theoremPageID + "B"];
									const className = getClassFromProps("list-item", { active, current, isEmpty });
									return (<FlexItem key={i} className={className} />)
								})}
							</FlexBox>
						</View>
					</FlexItem>
				</FlexBox>
			</Container>
		</View>
	);
};
