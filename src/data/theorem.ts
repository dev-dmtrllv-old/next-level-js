export const theorems: TheoremTextData = {
	"1A": "Ik maak meestal gemakkelijk contact met mensen en bouw zonder problemen een persoonlijke relatie met hen op.",
	"1B": "Ik maak meestal niet zo gemakkelijk contact met mensen en bouw niet zo gauw een persoonlijke relatie met hen op.",
	"2A": "Ik reageer meestal rustig en bedaard.",
	"2B": "Ik reageer meestal snel en spontaan.",
	"3A": "Ik waak er meestal voor dat anderen mijn tijd in beslag nemen.",
	"3B": "Ik heb er niet zoveel problemen mee als anderen mijn tijd inbeslag nemen.",
	"4A": "Bij informele bijeenkomsten neem ik meestal het initiatief en stel mij voor.",
	"4B": "Bij informele bijeenkomsten wacht ik meestal af tot anderen naar mij toekomen en zich aan mij voorstellen.",
	"5A": "In een gesprek richt ik mij meestal op de interesses van anderen, zelfs als we daardoor van het oorspronkelijke onderwerp afdwalen.",
	"5B": "Normaal gesproken concentreer ik mij in een gesprek alleen op het onderwerp of de taak waarover we het hebben.",
	"6A": "Gewoonlijk ben ik niet zo assertief en kan ik geduld opbrengen als iemand veel tijd nodig heeft.",
	"6B": "Gewoonlijk ben ik assertief en soms heb ik weinig geduld als iemand veel tijd nodig heeft.",
	"7A": "Meestal baseer ik mijn beslissingen op feiten of bewijzen.",
	"7B": "Meestal ga ik bij beslissingen op mijn gevoel af, of ik laat ze afhangen van mijn ervaringen of mijn relatie met iemand.",
	"8A": "Ik neem vaak het woord tijdens groepsgesprekken.",
	"8B": "Ik neem niet vaak het woord tijdens groepsgesprekken.",
	"9A": "Ik werk het liefst met anderen samen en help hen waar nodig.",
	"9B": "Ik werk het liefst alleen of ik bepaal de gang van zaken voor anderen",
	"10A": "Ik stel over het algemeen vragen en kijk eerst een beetje de kat uit de boom.",
	"10B": "Over het algemeen steek ik mijn mening niet onder stoelen of banken.",
	"11A": "Mijn aandacht gaat voornamelijk uit naar ideeën, concepten of resultaten.",
	"11B": "Mijn aandacht gaat voornamelijk uit naar personen, interactie en gevoelens.",
	"12A": "Ik gebruik meestal gebaren, gezichtsuitdrukkingen en stemintonatie om mijn betoog kracht bij te zetten.",
	"12B": "Ik gebruik zelden gebaren, gezichtsuitdrukkingen en temintonatie om mijn betoog kracht bij te zetten.",
	"13A": "Over het algemeen accepteer ik het standpunt (ideeën, gevoelens en belangen) van anderen.",
	"13B": "Over het algemeen accepteer ik het standpunt (ideeën, gevoelens en belangen) van anderen niet.",
	"14A": "Op risico’s en verandering reageer ik meestal voorzichtig en voorspelbaar.",
	"14B": "Op risico’s en verandering reageer ik meestal temperamentvol en onvoorspelbaar.",
	"15A": "Ik houd mijn persoonlijke gevoelens en gedachten graag voor me en deel ze alleen met anderen als ik dat wil.",
	"15B": "Ik vind het gewoon mijn gevoelens met anderen te delen en te bespreken en doe dat met gemak.",
	"16A": "Ik ben vaak op zoek naar nieuwe of andere ervaringen en situaties.",
	"16B": "Ik kies vaak bekende of vergelijkbare situaties en relaties.",
	"17A": "Ik sta meestal open voor de bezigheden, belangen en interesses van anderen.",
	"17B": "Ik ben meestal gericht op mijn eigen zaken, belangen en interesses.",
	"18A": "Op conflicten reageer ik meestal traag en indirect.",
	"18B": "Op conflicten reageer ik meestal snel en direct.",
};

export type TheoremResult = {
	id: string;
	points: TheoremPoints;
}

export type TheoremTextData = {
	[id: string]: string;
};

export type TheoremPoints = 0 | 1 | 2 | 3;
