import React from "react";
import { Button, Container, FlexBox, FlexItem, Heading, View } from "views";

import { TheoremContext } from "./TheoremContext";
import { Panel } from "./Panel";

import "./styles/time-up-modal.scss";

export const TimeUpModal = () =>
{
	const { toResults } = React.useContext(TheoremContext);

	// if (isTimeUp)
	// 	return (
	// 		<View id="time-up-modal" position="absolute" fill>
	// 			<Container fill>
	// 				<View className="modal" position="absolute" center>
	// 					<Panel>
	// 						<FlexBox dir="vertical">
	// 							<FlexItem base={64}>
	// 								<View position="absolute" center="vertical">
	// 									<Heading type="header">
	// 										De tijd is verlopen!
	// 									</Heading>
	// 								</View>
	// 							</FlexItem>
	// 							<FlexItem className="body">
	// 								<p>
	// 									De tijd is verlopen, dit betekent gelukkig niet dat er geen resultaat is!
	// 									<br />
	// 									Klik hieronder op de knop om naar het resultaat te gaan.
	// 								</p>
	// 							</FlexItem>
	// 							<FlexItem base={64}>
	// 								<View position="absolute" center>
	// 									<Button type="tertiary" onClick={toResults}>
	// 										Resultaat
	// 									</Button>
	// 								</View>
	// 							</FlexItem>
	// 						</FlexBox>
	// 					</Panel>
	// 				</View>
	// 			</Container>
	// 		</View>
	// 	);
	return null;
};
