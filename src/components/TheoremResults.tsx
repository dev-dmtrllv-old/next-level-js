import React from "react";

import { calculateResults } from "data/calc-results";
import { renderResults } from "services/result-renderer";
import { downloadPdf } from "services/pdf";

import { FlexBox, FlexItem, View, Container, Heading } from "views";

import { TheoremContext } from "./TheoremContext";

import "./styles/theorem-results.scss";

export const TheoremResults = () =>
{
	const { results, retry } = React.useContext(TheoremContext);
	const resultsRef = React.useRef(calculateResults(results));

	const renderRef = React.useRef(renderResults(resultsRef.current.x, resultsRef.current.y));
	
	const imgRef = React.useRef<HTMLImageElement>();

	return (
		<Container fill id="theorem-results">
			<FlexBox>
				<FlexItem>
					<View fill>
						<Heading type="header">Klaar!</Heading>
						<View>
							U bent {resultsRef.current.type}. ({renderRef.current.color})
						</View>
						<View>
							Zie de kenmerken van een andere kleur: 
							{/* <DropdownButton> */}

							{/* </DropdownButton> */}
						</View>
						{JSON.stringify(results, null, 4)}
						<button onClick={retry}>retry</button>
						<button onClick={() => { downloadPdf(imgRef.current) }}>download pdf</button>
						<br />
					</View>
				</FlexItem>
				<FlexItem>
					<img ref={imgRef} src={renderRef.current.dataUrl} style={{ maxWidth: "100%" }} />
				</FlexItem>
			</FlexBox>
		</Container>
	);
}
