import { calculateResults } from "data/calc-results";
import { TheoremTypes } from "data/theorem";
import React from "react";
import { View } from "views";
import { TheoremContext } from "./TheoremContext";

export const ResultGridRenderer: React.FC<ResultGridRendererProps> = ({ onClick }) =>
{
	const { results } = React.useContext(TheoremContext);

	const canvasRef = React.useRef<HTMLCanvasElement>();
	const ctxRef = React.useRef<CanvasRenderingContext2D>();
	const hoverTargetRef = React.useRef<TheoremTypes | null>(null);

	const pos = calculateResults(results);

	const getTarget = (e: React.MouseEvent): TheoremTypes =>
	{
		const c = canvasRef.current.getBoundingClientRect();

		const s = c.width / 2;

		const x = e.clientX - c.x;
		const y = e.clientY - c.y;

		if (x < s && y < s) // left top
			return "motivator";
		else if (x < s && y >= s) // left bottom
			return "regisseur";
		else if (x >= s && y < s) // right top
			return "zorger";
		else if (x >= s && y >= s) // right bottom
			return "analyticus";
	}

	const render = () =>
	{
		let { x, y } = pos;

		const size = ctxRef.current.canvas.width - 20;

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

		const hoverTarget = hoverTargetRef.current;
		const ctx = ctxRef.current;
		ctx.fillStyle = "white";

		const totalSize = size * 2;

		ctx.save();

		ctx.fillRect(0, 0, totalSize, totalSize);
		ctx.translate(10, 10);

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

			if (hoverTarget && (text.toLowerCase() == hoverTarget.toLowerCase()))
			{
				ctx.save();
				ctx.fillStyle = color;
				ctx.fillRect(x, y, half, half);
				ctx.restore();

				ctx.save();
				ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;
				ctx.fillRect(x, y, half, half);
				ctx.restore();
			}

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

		// clamp both ways (positive as well as negative)
		if (x < 0 && x > -14)
			x = -14;
		else if (x > 0 && x < 14)
			x = 14;

		if (y < 0 && y > -14)
			y = -14;
		else if (y > 0 && y < 13)
			y = 14;

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
		ctx.arc(x, y, 2, 0, 2 * Math.PI);
		ctx.lineWidth = size * 15 / 650;
		ctx.stroke();

		ctx.restore();
	}

	const onMouseDown = (e: React.MouseEvent) => onClick(getTarget(e));

	const onMouseMove = (e: React.MouseEvent) =>
	{
		const t = getTarget(e);
		if (t !== hoverTargetRef.current)
		{
			hoverTargetRef.current = t;
			render();
		}
	}

	const onMouseLeave = () => 
	{
		if (hoverTargetRef.current !== null)
		{
			hoverTargetRef.current = null;
			render();
		}
	};

	React.useEffect(() => 
	{
		const c = canvasRef.current;
		ctxRef.current = c.getContext("2d");

		const resizeHandler = () =>
		{
			const parent = c.parentElement!;
			c.style.width = c.style.width = (c.width = c.height = parent.clientWidth) + "px";
			render();
		};

		resizeHandler();


		window.addEventListener("resize", resizeHandler);

		return () => { window.removeEventListener("resize", resizeHandler); };
	}, []);

	return (
		<View className="canvas-wrapper">
			<canvas ref={canvasRef} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} />
		</View>
	);
};

type ResultGridRendererProps = {
	onClick: (target: TheoremTypes) => any;
};
