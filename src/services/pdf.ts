import { jsPDF } from "jspdf";

export const downloadPdf = (image: HTMLImageElement) =>
{
	const pdf = new jsPDF();
	pdf.addImage(image, "PNG", 0, 0, 150, 150);
	pdf.save("download.pdf");
}
