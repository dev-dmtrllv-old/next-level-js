import React from "react";
import { THEOREM_MAX_PAGES } from "data/theorem";
import { View } from "views";
import { Container } from "./Container";
import { TheoremPanel } from "./TheoremPanel";
import { TheoremContext } from "./TheoremContext";
import { TheoremIntro } from "./TheoremIntro";
import { TheoremNextButton } from "./TheoremNextButton";
import { TheoremResults } from "./TheoremResults";
import { TheoremButtonGroup } from "./TheoremButtonGroup";
import { InfoPanel } from "./InfoPanel";
import { TrackList } from "./Tracklist";
import { TimeUpModal } from "./TimeUpModal";
import { TimerNotification } from "./TimerNotification";

import "./styles/app.scss";

export const TheoremApp: React.FC = () => 
{
	const { theoremPageID } = React.useContext(TheoremContext);

	if (theoremPageID === 0) // app was never loaded before
	{
		return (
			<TheoremIntro />
		)
	}
	else if (theoremPageID > THEOREM_MAX_PAGES) // app was finished
	{
		return (
			<TheoremResults />
		);
	}
	else
	{
		return (
			<>
				<View className="theorem-app">
					<TimerNotification />
					<Container>
						<View className="body">
							<InfoPanel />
							<View className="app-grid">
								<TheoremPanel target="A" />
								<TheoremButtonGroup target="A" />
								<TheoremPanel target="B" />
								<TheoremButtonGroup target="B" />
							</View>
							<View className="next-btn-wrapper">
								<TheoremNextButton />
							</View>
						</View>
					</Container>
				</View>
				<TimeUpModal />
				<TrackList />
			</>
		);
	}
}
