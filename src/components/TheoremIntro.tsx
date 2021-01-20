import React from "react";

import { FlexBox, FlexItem, View, Container, Heading, Button } from "views";

import { Panel } from "./Panel";
import { TheoremContext } from "./TheoremContext";

import "./styles/intro.scss";

const introPoints = [
	"Kies vooraf een duidelijke context, zoals ‘mijn functioneren op mijn werk’ of ‘mijn functioneren in mijn gezin’. De context kan namelijk invloed hebben op je gedrag.",
	"Vul de antwoorden uit de test vanuit deze context in. In bewering 1A staat bijvoorbeeld ‘ik maak gemakkelijk contact met mensen’. Vul dan “mensen” in vanuit jouw context, bijvoorbeeld collega’s, ouders, kinderen.",
	"Vul de vragen in vanuit je huidige daadwerkelijke gedrag ‘dit doe ik in deze specifieke context’ en niet vanuit je wenselijke gedrag ’ik zou graag willen dat ik het zo deed’.",
	"Wees toeschouwer van jezelf. Bekijk jezelf gerust van een afstand, alsof je jezelfziet op een televisiescherm. Wat doe je dan? Wat zie je, hoor je? Vul vanuit deze ‘neutrale positie’ als toeschouwer de test in.",
	"Er is geen goed of fout. Het allerbelangrijkste is het antwoord dat je geeft oprecht het best passende antwoord voor jou is. Tip: het eerste dat bij je opkomt is."
];

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
						<Button type="secundary">
							Ga terug
						</Button>
						<Button type="primary" onClick={next}>
							Volgende
						</Button>
					</View>
				</Panel>
			</Container>
		</View>
	);
}
