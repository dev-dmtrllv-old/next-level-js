import { jsPDF } from "jspdf";

import Logo from "../assets/img/logo.png";
import InfoImg from "../assets/img/communication-info.png";
import PointsImg from "../assets/img/communication-points.png";
import { resultInfoPoints } from "data/theorem";

const loadImage = (src: string) => new Promise<HTMLImageElement>((res, rej) => 
{
	const img = document.createElement("img");
	img.src = src;
	img.onload = () => res(img);
	img.onerror = (err) => rej(err);
});

export const downloadPdf = async (dataUrl: string, data: PDFData) =>
{
	const resultImg = await loadImage(dataUrl);
	const logoImg = await loadImage(Logo);
	const tableImg = await loadImage(PointsImg);
	const infoImg = await loadImage(InfoImg);

	const pdf = new jsPDF();

	const w = pdf.internal.pageSize.width;
	let h = pdf.internal.pageSize.height;

	const resultImgWidth = 100;

	const padding = {
		top: 5,
		left: 15
	};

	pdf.addImage(logoImg, "PNG", 5, 5, 50, 20);
	let tw = pdf.getTextWidth(data.resultText);
	pdf.text(data.resultText, (w - tw) / 2, 35);
	pdf.addImage(resultImg, "PNG", (w / 2) - (resultImgWidth / 2), 40, resultImgWidth, resultImgWidth);

	pdf.addImage(infoImg, "PNG", (w - 150) / 2, 145, 150, 150);

	pdf.addPage();

	{
		pdf.setFontSize(24);
		const txt = "Basisstijl kenmerken";
		let tw = pdf.getTextWidth(txt);
		pdf.text(txt, (w - tw) / 2, 35);
		const _w = 672 / 4;
		const _h = 772 / 4;

		pdf.addImage(tableImg, "PNG", (w - _w) / 2, (h - _h) / 2, _w, _h);
	}


	pdf.save("werk-30-test.pdf");
}

type PDFData = {
	resultText: string;
	points: string[];
};
