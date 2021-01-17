import React from "react";
import { FlexBox, FlexItem, View } from "views";

import { TheoremContext } from "./TheoremContext";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Panel } from "./Panel";
import { Button } from "./Button";

import "./styles/time-up-modal.scss";

export const TimeUpModal = () =>
{
	const { isTimeUp, toResults } = React.useContext(TheoremContext);

	if (isTimeUp)
		return (
			<View id="time-up-modal" position="absolute" fill>
				<Container fill>
					<View className="modal" position="absolute" center>
						{/* <View fill> */}
							<Panel>
								<FlexBox dir="vertical">
									<FlexItem base={64}>
										<View position="absolute" center="vertical">
											<Heading type="header">
												De tijd is verlopen!
											</Heading>
										</View>
									</FlexItem>
									<FlexItem className="body">
										<p>
											De tijd is verlopen, dit betekent gelukkig niet dat er geen resultaat is!
											<br />
											Klik hieronder op de knop om naar het resultaat te gaan.
										</p>
									</FlexItem>
									<FlexItem base={64}>
										<View position="absolute" center>
											<Button type="tertiary" onClick={toResults}>
												Resultaat
										</Button>
										</View>
									</FlexItem>
								</FlexBox>
							</Panel>
						{/* </View> */}
					</View>
				</Container>
			</View>
		);
	return null;
};
