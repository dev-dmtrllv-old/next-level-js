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
	const [downloadState, setDownloadState] = React.useState<{ isDownloading: boolean, didDownload: boolean }>({ isDownloading: false, didDownload: false });

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

		if (!downloadState.isDownloading)
		{
			setDownloadState({ isDownloading: true, didDownload: downloadState.didDownload });

			downloadPdf(renderRef.current.dataUrl, pdfRenderData).then(() => 
			{
				setDownloadState({ isDownloading: false, didDownload: true });
			});
		}
	}

	const hasEmptyResults = !renderRef.current;

	const modalInfo = getCommunicationInfo(modalTarget) || [];
	const modalInfoItems = modalInfo.length;

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
										<p>Klik op een kleur om te zien wat de herken punten zijn op communicatief gebied van die kleur.</p>
										<ResultGridRenderer onClick={openModal} />
										<p>Zie hieronder uw kenmerken, kies een andere kleur om daar de kenmerken van te zien of download het resultaat als pdf <a href="#" onClick={onDownloadPdfLink}>{downloadState.isDownloading ? "downloading..." : "hier"}</a>.</p>
									</>
								)}
								<View className="others">
									<span>Zie de kenmerken van een andere kleur: </span><DropdownButton items={btnColorTypes} initIndex={getInitIndex(target)} />
								</View>
								<View>
									{getPointsFromTarget(currColor).map((p, i) => <p key={i}>{resultInfoPoints[i].replace("__COLOR__", translateColor2(currColor))}: {p.toLowerCase()}.</p>)}
								</View>
								{isMobile && (
									<View center="horizontal">
										<span style={{ fontSize: "16px", paddingTop: "15px" }}>De test wordt 1 uur lang bewaard. Druk op de knop hieronder om opnieuw te beginnen.</span>
										<Button type="tertiary" style={{ marginTop: "15px" }} onClick={() => { retry() }}>Opnieuw</Button>
									</View>
								)}
							</>
						)}
					</View>
				</View>
			</FlexItem>
			{!isMobile && !hasEmptyResults && (
				<FlexItem className="right">
					<View position="absolute" className="content" fill>
						<FlexBox className="text">
							<FlexItem base={45}>
								<span>&#8594;</span>
							</FlexItem>
							<FlexItem>
								<h2>Klik op een kleur om te zien wat de herken punten zijn op communicatief gebied van die kleur.</h2>
							</FlexItem>
							<FlexItem base={45}>
								<span>&#8592;</span>
							</FlexItem>
						</FlexBox>
						<ResultGridRenderer onClick={openModal} />
						<Button type="primary" onClick={onDownloadPdfLink}>{downloadState.isDownloading ? "downloading..." : "download pdf"}</Button>
						<span style={{ fontSize: "16px", paddingTop: "15px" }}>De test wordt 1 uur lang bewaard. Druk op de knop hieronder om opnieuw te beginnen.</span>
						<Button type="secundary" style={{ marginTop: "15px" }} onClick={() => { retry() }}>Opnieuw</Button>
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
									{modalInfo.map((p, i) => 
									{
										if (i == 0)
											return <h2 key={i}>{p}</h2>;
										else if (i == modalInfoItems - 1)
											return (<React.Fragment key={i}><br /><p>{p}</p></React.Fragment>);
										return <p key={i}>{p}</p>;
									})}
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
