import React from "react";

import { calculateResults } from "data/calc-results";
import { analyticusPoints, motivatorPoints, regissuerPoints, resultInfoPoints, zorgerPoints } from "data/theorem";
import { renderResults } from "services/result-renderer";
import { downloadPdf } from "services/pdf";

import { DropdownButton, FlexBox, FlexItem, View, Container, Heading, DropdownItem } from "views";

import { TheoremContext } from "./TheoremContext";

import "./styles/theorem-results.scss";

const getPointsFromTarget = (target: string) =>
{
	switch (target)
	{
		case "analyticus":
			return analyticusPoints;
		case "motivator":
			return motivatorPoints;
		case "zorger":
			return zorgerPoints;
		case "regisseur":
			return regissuerPoints;
	}
}

const getInitIndex = (target: string) =>
{
	switch (target)
	{
		case "analyticus":
			return 3;
		case "motivator":
			return 0;
		case "zorger":
			return 1;
		case "regisseur":
			return 2;
	}
}

const translateColor = (color: string) =>
{
	switch (color.toLowerCase())
	{
		case "green":
			return "groen";
		case "yellow":
			return "geel";
		case "red":
			return "rood";
		case "blue":
			return "blauw";
	}
}


export const TheoremResults = () =>
{
	const { results, retry } = React.useContext(TheoremContext);
	const resultsRef = React.useRef(calculateResults(results));

	const renderRef = React.useRef(renderResults(resultsRef.current.x, resultsRef.current.y));

	const target = resultsRef.current.type.split(" ")[1].toLowerCase();

	const imgRef = React.useRef<HTMLImageElement>();

	const [currPoints, setCurrPoints] = React.useState(getPointsFromTarget(target));

	const btnColorTypes: DropdownItem[] = [
		{
			text: "Motivator (Geel)",
			action: () => { setCurrPoints(getPointsFromTarget("motivator")) }
		},
		{
			text: "Zorger (Groen)",
			action: () => { setCurrPoints(getPointsFromTarget("zorger")) }
		},
		{
			text: "Regisseur (Rood)",
			action: () => { setCurrPoints(getPointsFromTarget("regisseur")) }
		},
		{
			text: "Analyticus (Blauw)",
			action: () => { setCurrPoints(getPointsFromTarget("analyticus")) }
		}
	];

	return (
		<FlexBox fill id="theorem-results">
			<FlexItem className="left">
				<View fill position="absolute">
					<View position="relative" className="content">
						<Heading type="header">Klaar!</Heading>
						<View>
							U bent {resultsRef.current.type}. ({translateColor(renderRef.current.color)})
						</View>
						<View>
							<span>Zie de kenmerken van een andere kleur: </span><DropdownButton items={btnColorTypes} initIndex={getInitIndex(target)} />
						</View>
						<View>
							{currPoints.map((p, i) => <p key={i}>{resultInfoPoints[i]}: {p}</p>)}
						</View>

						{/* <button onClick={() => { downloadPdf(imgRef.current) }}>download pdf</button> */}
					</View>
				</View>
			</FlexItem>
			<FlexItem className="right">
				<View position="absolute" className="content" fill>
					<img ref={imgRef} src={renderRef.current.dataUrl} style={{ maxWidth: "100%" }} />
				</View>
			</FlexItem>
		</FlexBox>
	);
}

