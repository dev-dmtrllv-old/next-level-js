import React from "react";
import { Container, Heading, View } from "views";

import { TheoremContext } from "./TheoremContext";
import { Panel } from "./Panel";

import "./styles/timer-notification.scss";

export const TimerNotification = () =>
{
	// const { showLeftTime, hideTimerNotification } = React.useContext(TheoremContext);

	return (
		// <View id="timer-notification" className={showLeftTime ? "show" : ""} position="absolute">
		// 	<Container>
		// 		<Panel className="inner-notification">
		// 			<View position="absolute" center="vertical">
		// 				<Heading type="sub">Let op! U heeft nog 5 minuten.</Heading>
		// 			</View>
		// 			<View className="btn-close" center="vertical" position="absolute" onClick={hideTimerNotification}>
		// 				<View className="inner-btn" position="absolute" center />
		// 			</View>
		// 		</Panel>
		// 	</Container>
		// </View>
		null
	);
};
