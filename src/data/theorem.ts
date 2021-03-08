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

export const introPoints = [
	"Kies vooraf een duidelijke context, zoals ‘mijn functioneren op mijn werk’ of ‘mijn functioneren in mijn gezin’. De context kan namelijk invloed hebben op je gedrag.",
	"Vul de antwoorden uit de test vanuit deze context in. In bewering 1A staat bijvoorbeeld ‘ik maak gemakkelijk contact met mensen’. Vul dan “mensen” in vanuit jouw context, bijvoorbeeld collega’s, ouders, kinderen.",
	"Vul de vragen in vanuit je huidige daadwerkelijke gedrag ‘dit doe ik in deze specifieke context’ en niet vanuit je wenselijke gedrag ’ik zou graag willen dat ik het zo deed’.",
	"Wees toeschouwer van jezelf. Bekijk jezelf gerust van een afstand, alsof je jezelfziet op een televisiescherm. Wat doe je dan? Wat zie je, hoor je? Vul vanuit deze ‘neutrale positie’ als toeschouwer de test in.",
	"Er is geen goed of fout. Het allerbelangrijkste is het antwoord dat je geeft oprecht het best passende antwoord voor jou is. Tip: het eerste dat bij je opkomt is."
];

export const info = "Verdeel 3 punten over de 2 stellingen die het beste bij jou passen. De overgebleven punten worden automatisch bij de andere stelling neergezet.";

export const THEOREM_MAX_PAGES = Object.keys(theorems).length / 2;

export const THEOREM_MAX_TIME = 60 * 20; // 20 min

export const THEOREM_NOTIFICATION_TIME = 60 * 5; // 5 min

export type TheoremResults = {
	[id: string]: TheoremPoints;
};

export type TheoremTextData = {
	[id: string]: string;
};

export type TheoremPoints = 0 | 1 | 2 | 3;

export type TheoremTypes = "regisseur" | "analyticus" | "zorger" | "motivator";

export const resultInfoPoints = [
	"Sterke kanten",
	"Zwakke kanten",
	"Irritatie",
	"Doelen",
	"Angst",
	"Motivatie & eigenwaarde",
	"Primaire bijdrage",
	"Stressreactie",
	"Leerpunten",
	"Gedijt goed in een klimaat dat",
	"Benadering",
	"Ondersteun hen door",
	"Stemgebruik",
	"Gevoelens",
	"Help hen",
	"Risico's",
	"Neemt beslissingen op basis van",
	"Wijs hen op punten die aangeven",
];

export const regissuerPoints = [
	"Initiatief nemen",
	"Ongeduldig, Ongevoelig",
	"Besluiteloosheid",
	"Productiviteit, Controle",
	"Bedrog",
	"Winnen en macht",
	"Voortgang bewaken",
	"Doordrukken",
	"Luisteren naar anderen",
	"Ruimte schept",
	"Ben efficiënt",
	"Conclusies en acties",
	"Hoog volume, monotoon en staccato",
	"Houdt gevoelens voor zichzelf",
	"Tijd/geld besparen",
	"Neemt risico's	",
	"Opties en uitspraken over resultaten en kansen",
	"Wat het resultaat van de oplossing zal zijn",
];

export const motivatorPoints = [
	"Overtuiging persoonlijke interactie",
	"Ongeorganiseerd, Zorgeloosheid",
	"Routine",
	"Populariteit, Applaus",
	"Prestigeverlies",
	"Erkenning en goedkeuring",
	"Energie opwekken",
	"Aanvallen",
	"Checken",
	"Inspireert",
	"Ben interessant",
	"Inzichten en ingevingen",
	"Hoogvolume, wisselende toonhoogtes",
	"Deelt gemakkelijk gevoelens",
	"Inzet te doseren",
	"Neemt risico’s",
	"Voorbeelden en aanmoedigingspremies",
	"Waar het uiteindelijk om gaat",
];

export const zorgerPoints = [
	"Servicegerichtheid, luisteren",
	"Overgevoeligheid, Besluiteloosheid",
	"Ongevoeligheid",
	"Acceptatie, Stabiliteit",
	"Plotselinge verandering",
	"Betrokkenheid en goedkeuring",
	"Verbinden",
	"Berusten",
	"Initiatief nemen",
	"Mogelijkheden biedt",
	"Ben coöperatief",
	"Relaties en gevoelens",
	"Laag volume, wisselende toonhoogtes",
	"Deelt gemakkelijk gevoelens",
	"Relaties te behouden",
	"Vermijdt risico’s",
	"Garanties en toezeggingen",
	"Wie meedoet",
];

export const analyticusPoints = [
	"Planning Analyse",
	"Perfectionisme, Overdreven kritisch",
	"Accuratessem, Gedegenheid",
	"Structuur en respect",
	"aanbrengen",
	"Vermijden",
	"Sneller beslissingen nemen",
	"Informeert en beschrijft",
	"Ben accuraat",
	"Principes en denkbeelden",
	"Laag volume, monotoon",
	"gevoelens voor zichzelf",
	"gezicht te redden",
	"Vermijdt risico’s",
	"Bewijsmateriaal en service",
	"probleem wordt opgelost",
];


export const getCommunicationInfo = (target: TheoremTypes) =>
{
	switch(target)
	{
		case "analyticus":
			return [
				"Bereid u zeer goed voor en zorg voor feitelijke onderbouwing.",
				"Setl in het begin geen persoonlijke vragen, bewaar afstand.",
				"Geed de ander de tijd om te analyseren of om een correct antwoord te vinden.",
				"wees op tijd en voorkom een nonchalante of informele indruk.",
				"Geef zoveel mogelijk informatie schriftelijk, laat de ander beoordelen.",
				"Houd zelf de regie.",
				"Maak duidelijke afspraken en kom deze na.",
				"Bied ruimte om na te denken, dring niet teveel aan."
			];
		case "motivator":
			return [
				"Zorg voor een vriendelijke en gezellige sfeer.",
				"Treed in verbinding en ga in gesprek. Toon uw betrokkenheid.",
				"Laat iets van uzelf zien.",
				"Concentreer op het totaalplaatje.",
				"Toon interesse, stel veel vragen en luister actief.",
				"Help de ander overzicht te krijgen, doe het waar nodig samen.",
				"Laat blijken dat u de ander aardig vindt, waardeert en goedkeurt.",
				"vermijd detail (geef deze schriftelijk).",
				"zorg voor een concreet vervolg."
			];
		case "regisseur":
			return [
				"Wees goed voorbereid en zorg dat u uw informatie paraat hebt.",
				"Richt u op de hoofdlijnen.",
				"Wees kort en 'to the point', vermijd wollig en vaag taalgebruik.",
				"Argumenteer met feiten, presenteer deze in logische en overzichtelijke volgorde.",
				"Laat zien hoe de ander kan winnen. Creeer kansen en daag uit het spel te spelen.",
				"Stem met elkaar concrete doelen af. Laat de ander het 'hoe' bepalen.",
				"Erken hetgeen de ander bereikt heeft, complimenteer.",
				"Geef ruimte en toestemming om zelfstandig te beslissen, geef daarbij kaders mee."
			];
			
		case "zorger":
			return [
				"Zoek het juiste moment en creéer een ontspannen sfeer.",
				"Kom niet gelijk ter zake.",
				"Start met persoonlijke opmerking, toon interesse in de anders familie.",
				"Praat met rustige gelijkmatige stem, voorkom stemverheffing.",
				"Laat zien dat u oprecht geinteresseerd bent, luister goed en vraag door.",
				"Bereid de ander voor, neem hem mee in wat gaat gebeuren.",
				"Geef de ander bedenktijd wanneer u een reactie vraagt.",
				"Maak de ander duidelijk hoe uw voorstel risico's beperkt of uitsluit.",
			];
	}
}
