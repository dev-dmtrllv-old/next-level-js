export const renderResults = (x: number, y: number) => 
{
	const size = 1500;
	const margin = 20;

	const half = size / 2;
	const quarter = half / 2;
	const octal = quarter / 2;

	const fontSize = size / 30;
	const txtSpacing = (fontSize / 2) + 3;

	const quadrantTexts = [
		"Motiverende",
		"Zorgende",
		"Regisserende",
		"Analytische"
	];

	const canvas = document.createElement("canvas");

	const totalSize = size + margin * 2;

	canvas.width = canvas.height = totalSize;
	canvas.style.width = canvas.style.height = `${totalSize}px`;

	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, totalSize, totalSize);
	ctx.translate(20, 20);

	ctx.getImageData(0, 0, size, size);

	ctx.textAlign = "center";
	ctx.font = `${fontSize}px Arial`;

	// render inner quadrants
	const renderInnerQuadrant = (offsetX: number, offsetY: number, color: string, text: string) =>
	{
		let x = offsetX;
		let y = offsetY;
		ctx.save();

		ctx.translate(0.5, 0.5);

		ctx.fillStyle = color;
		ctx.strokeRect(x, y + quarter - 1, half, 2);
		ctx.strokeRect(x + quarter - 1, y, 2, half);
		ctx.translate(-0.5, -0.5);
		ctx.fillRect(x, y + quarter, half, 1);
		ctx.fillRect(x + quarter, y, 1, half);
		ctx.restore();

		let txtIndex = 0;


		for (let i = 0; i < 2; i++)
		{
			for (let j = 0; j < 2; j++)
			{
				const txtX = x + (j * quarter) + octal;
				const txtY = y + (i * quarter) + octal;
				const quadText = quadrantTexts[txtIndex++];

				ctx.save();
				ctx.fillStyle = color;
				ctx.strokeStyle = `rgba(0, 0, 0, 0.3)`;
				ctx.fillText(quadText, txtX, txtY - txtSpacing);
				ctx.fillText(text, txtX, txtY + txtSpacing);

				ctx.translate(0.5, 0);
				ctx.strokeText(quadText, txtX, txtY - txtSpacing);
				ctx.strokeText(text, txtX, txtY + txtSpacing);
				ctx.restore();
			}
		}
	}

	ctx.strokeStyle = `rgb(200, 200, 200)`;

	// render inner quadrants (split view in quarters)
	renderInnerQuadrant(0, 0, "yellow", "Motivator");
	renderInnerQuadrant(half, 0, "green", "Zorger");
	renderInnerQuadrant(0, half, "red", "Regisseur");
	renderInnerQuadrant(half, half, "blue", "Analyticus");

	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";

	ctx.translate(0.5, 0.5);

	// create quadrants (split view in halfs)
	ctx.beginPath();
	ctx.moveTo(half, 0);
	ctx.lineTo(half, size);
	ctx.moveTo(0, half);
	ctx.lineTo(size, half);
	ctx.stroke();

	ctx.translate(-0.5, -0.5);

	ctx.strokeRect(0, 0, size, size);

	let color = "";


	// clamp both ways (positive as well as negative)
	if (x < 0 && x > -14)
		x = -14;
	else if (x > 0 && x < 14)
		x = 14;

	if (y < 0 && y > -14)
		y = -14;
	else if (y > 0 && y < 13)
		y = 14;


	// compute color
	if (x < 0 && y > 0)
		color = "yellow";
	else if (x < 0 && y < 0)
		color = "red";
	else if (x > 0 && y > 0)
		color = "green";
	else if (x > 0 && y < 0)
		color = "blue";

	ctx.strokeStyle = "purple";

	const range = 13;
	const step = half / (range + 1);

	if (x < 0)
		x = ((x + range) * step) + half;
	else
		x = ((x - range) * step) + half;

	if (y < 0)
		y = -((y + range) * step) + half;
	else
		y = -((y - range) * step) + half;

	ctx.beginPath();
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
	ctx.lineWidth = 8;
	ctx.stroke();

	return {
		color,
		dataUrl: canvas.toDataURL("image/png")
	};
};
