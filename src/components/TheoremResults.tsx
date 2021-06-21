import React from "react";

import { calculateResults } from "data/calc-results";
import { analyticusPoints, getCommunicationInfo, motivatorPoints, regissuerPoints, resultInfoPoints, TheoremTypes, zorgerPoints } from "data/theorem";
import { renderResults } from "services/result-renderer";

import { ResultGridRenderer } from "./ResultGridRenderer";
import { Panel } from "./Panel";
import { getClassFromProps } from "utils/react";

import { DropdownButton, FlexBox, FlexItem, View, Container, Heading, DropdownItem, Button } from "views";

import { TheoremContext } from "./TheoremContext";
import { downloadPdf } from "services/pdf";
import { Storage } from "../services/storage";

import "./styles/theorem-results.scss";

const getPointsFromTarget = (target: string) =>
{
	switch (target)
	{
		case "blue":
			return analyticusPoints;
		case "yellow":
			return motivatorPoints;
		case "green":
			return zorgerPoints;
		case "red":
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
	return "";
}

const translateColor2 = (color: string) =>
{
	switch (color.toLowerCase())
	{
		case "green":
			return "groene";
		case "yellow":
			return "gele";
		case "red":
			return "rode";
		case "blue":
			return "blauwe";
	}
	return "";
}

const getCommunicationInfoTitle = (target: TheoremTypes) =>
{
	switch (target)
	{
		case "analyticus":
			return "Analyticus - Blauw";
		case "motivator":
			return "Motivator - Geel";
		case "regisseur":
			return "Regisseur - Rood";
		case "zorger":
			return "Zorger - Groen";
	}
}

export const TheoremResults = () =>
{
	const { results, retry } = React.useContext(TheoremContext);

	const resultsRef = React.useRef(calculateResults(results));

	const renderRef = React.useRef(renderResults(resultsRef.current.x, resultsRef.current.y));

	const target = resultsRef.current.type?.split(" ")[1].toLowerCase();

	// const [currPoints, setCurrPoints] = React.useState(getPointsFromTarget(target));
	const [currColor, setCurrColor] = React.useState(renderRef.current.color);

	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
	const [modalTarget, setModalTarget] = React.useState<TheoremTypes | null>(null);

	const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 1024);

	const btnColorTypes: DropdownItem[] = [
		{
			text: "Motivator (Geel)",
			action: () => { setCurrColor("yellow"); }
		},
		{
			text: "Zorger (Groen)",
			action: () => { setCurrColor("green"); }
		},
		{
			text: "Regisseur (Rood)",
			action: () => { setCurrColor("red"); }
		},
		{
			text: "Analyticus (Blauw)",
			action: () => { setCurrColor("blue"); }
		}
	];

	const openModal = (target: TheoremTypes) =>
	{
		if (modalTarget !== target)
			setModalTarget(target);

		if (!isModalOpen)
			setIsModalOpen(true);
	}

	const closeModal = () => { if (isModalOpen) setIsModalOpen(false); }

	React.useEffect(() => 
	{
		Storage.setLastResultTime();
		const onResize = () => { setIsMobile(window.innerWidth <= 1024); };
		window.addEventListener("resize", onResize);
		return () => { window.removeEventListener("resize", onResize); };
	}, []);

	const onDownloadPdfLink = (e: React.MouseEvent) =>
	{
		const pdfRenderData = {
			resultText: `U bent ${translateColor(renderRef.current?.color)}, een ${resultsRef.current?.type.toLowerCase()}`,
			points: getPointsFromTarget(target)
		};

		e.preventDefault();
		downloadPdf(renderRef.current.dataUrl, pdfRenderData);
	}

	const hasEmptyResults = !renderRef.current;
	
	console.log(currColor);
	
	return (
		<FlexBox fill id="theorem-results">
			<FlexItem className="left">
				<View fill position="absolute">
					<View position="relative" className="content">

						{!hasEmptyResults ? (
							<>
								<Heading type="header">Klaar!</Heading>
								<Heading type="sub">
									U bent {translateColor(renderRef.current?.color)}, een {resultsRef.current?.type.toLowerCase()}
								</Heading>
							</>
						) : (
							<View id="fail">
								<Heading type="header">
									U heeft geen antwoorden gegeven!
									</Heading>
								<Heading type="sub" style={{ marginBottom: "20px" }}>
									Hierdoor zijn er geen resultaten.
									</Heading>
								<Button id="fail" type="secundary" onClick={() => { retry() }}>
									Terug
									</Button>
							</View>
						)}
						{!hasEmptyResults && (
							<>
								{isMobile && (
									<>
										<p> Klik op een kleur om te zien wat de herken punten zijn op communicatief gebied van die kleur.</p>
										<ResultGridRenderer onClick={openModal} />
										<p>Zie hieronder uw kenmerken, kies een andere kleur om daar de kenmerken van te zien of download het resultaat als pdf <a href="#" onClick={onDownloadPdfLink}>hier</a>.</p>
									</>
								)}
								<View className="others">
									<span>Zie de kenmerken van een andere kleur: </span><DropdownButton items={btnColorTypes} initIndex={getInitIndex(target)} />
								</View>
								<View>
									{getPointsFromTarget(currColor).map((p, i) => <p key={i}>{resultInfoPoints[i].replace("__COLOR__", translateColor2(currColor))}: {p.toLowerCase()}.</p>)}
								</View>
							</>
						)}
					</View>
				</View>
			</FlexItem>
			{!isMobile && !hasEmptyResults && (
				<FlexItem className="right">
					<View position="absolute" className="content" fill>
						<p>Klik op een kleur om te zien wat de herken punten zijn op communicatief gebied van die kleur.</p>
						<ResultGridRenderer onClick={openModal} />
						<Button type="primary" onClick={onDownloadPdfLink}>download pdf</Button>
					</View>
				</FlexItem>
			)}
			<View className={getClassFromProps("modal-wrapper", { show: isModalOpen })} position="absolute" fill onClick={closeModal}>
				<Container fill>
					<View className="modal" position="absolute" center onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
						<Panel>
							<FlexBox dir="vertical">
								<FlexItem base={64}>
									<View position="absolute" center="vertical">
										<Heading type="header">
											{getCommunicationInfoTitle(modalTarget)}
										</Heading>
									</View>
								</FlexItem>
								<FlexItem className="body">
									{getCommunicationInfo(modalTarget)?.map(p => <p>{p}</p>)}
								</FlexItem>
								<FlexItem base={64}>
									<View position="absolute" center>
										<Button type="tertiary" onClick={() => setIsModalOpen(false)}>
											Terug
										</Button>
									</View>
								</FlexItem>
							</FlexBox>
						</Panel>
					</View>
				</Container>
			</View>
		</FlexBox >
	);
}
