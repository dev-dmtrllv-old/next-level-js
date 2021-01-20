import React from "react";

import { FlexBox, FlexItem, View, Container, Heading, Button } from "views";
import { introPoints } from "data/theorem";

import { Panel } from "./Panel";
import { TheoremContext } from "./TheoremContext";

import "./styles/intro.scss";

export const TheoremIntro = () =>
{
	const { next } = React.useContext(TheoremContext);

	return (
		<View id="theorem-intro">
			<Container>
				<Panel>
					<Heading>Wat is jou manier van communiceren?</Heading>
					<Heading type="sub">Dit zijn belangrijke tips voor het invullen van de vragen om zo betrouwbare mogelijke antwoorden te krijgen.</Heading>
					{introPoints.map((point, i) => (
						<FlexBox className="point" key={i}>
							<FlexItem className="flex-bullet">
								<View className="bullet" position="absolute" center="horizontal" />
							</FlexItem>
							<FlexItem>
								{point}
							</FlexItem>
						</FlexBox>
					))}
					<View className="btn-group">
						<Button type="secundary" onClick={() => window.history.back()}>
							<View position="absolute" center>
								Terug
							</View>
						</Button>
						<Button type="primary" onClick={next}>
							<View position="absolute" center>
								Volgende
							</View>
						</Button>
					</View>
				</Panel>
			</Container>
		</View>
	);
}
