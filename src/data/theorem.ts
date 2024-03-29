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
	"Kies vooraf een duidelijke context, zoals ‘mijn functioneren op mijn werk’ of ‘mijn functioneren in mijn gezin’.\n De context kan namelijk invloed hebben op je gedrag.",
	"Vul de antwoorden uit de test vanuit deze context in. In bewering 1A staat bijvoorbeeld ‘ik maak gemakkelijk contact met mensen’. \nVul dan “mensen” in vanuit jouw context, bijvoorbeeld collega’s, ouders, kinderen.",
	"Vul de vragen in vanuit je huidige daadwerkelijke gedrag ‘dit doe ik in deze specifieke context’ en niet vanuit je wenselijke gedrag ’ik zou graag willen dat ik het zo deed’.",
	"Wees toeschouwer van jezelf. Bekijk jezelf gerust van een afstand, alsof je jezelfziet op een televisiescherm. Wat doe je dan? \n Wat zie je, hoor je? Vul vanuit deze ‘neutrale positie’ als toeschouwer de test in.",
	"Er is geen goed of fout. Het allerbelangrijkste is het antwoord dat je geeft oprecht het best passende antwoord voor jou is. \n Tip: het eerste dat bij je opkomt is."
];

export const info = "Verdeel drie punten over de twee stellingen. Hoe beter de stelling bij je past, hoe meer punten je het geeft. Indien er punten overblijven worden de automatisch aan de andere stelling toegekend.";

export const THEOREM_MAX_PAGES = Object.keys(theorems).length / 2;

export const THEOREM_MAX_TIME = 60 * 20; // 20 min

export const THEOREM_NOTIFICATION_TIME = 60 * 5; // 5 min

export const THEOREM_RESULT_LIFE_TIME = 60 * 60 * 1000; // 1 hour

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
	"Irritatie bij anderen",
	"Hoofddoelen",
	"Angst",
	"Haalt motivatie & eigenwaarde uit",
	"Primaire bijdrage",
	"Reactie bij stress",
	"Leerpunten",
	"Gedijt goed in een klimaat dat",
	"Wordt het liefst benaderd",
	"Haalt ondersteuning/zekerheid uit",
	"Stemgebruik",
	"Gevoelens",
	"Anderen helpen een '__COLOR__' door",
	"Risico's",
	"Neemt beslissingen op basis van",
	"Deze kleur krijg je mee door aan te geven aan te aangeven",
];

export const regissuerPoints = [
	"Initiatief nemen",
	"ongeduldig en ongevoelig",
	"Besluiteloosheid",
	"Productiviteit en Controle",
	"Bedrog",
	"Winnen en macht",
	"Voortgang bewaken",
	"Doordrukken",
	"Luisteren naar anderen",
	"Ruimte schept",
	"zo efficiënt mogelijk",
	"Conclusies en acties",
	"Hoog volume, monotoon en staccato",
	"Houdt gevoelens voor zichzelf",
	"Tijd en geld besparen",
	"Neemt risico's	",
	"Opties en uitspraken over resultaten en kansen",
	"Wat het resultaat van de oplossing zal zijn",
];

export const motivatorPoints = [
	"persoonlijke en menselijke benadering",
	"Ongeorganiseerd en Zorgeloosheid",
	"die handelen volgens strakke routine",
	"populair zijn en applaus ontvangen",
	"Prestigeverlies",
	"ontvangen erkenning en goedkeuring",
	"geel wekt energie op",
	"Aanvallen",
	"inchecken bij anderen, klopt het?",
	"Inspireert",
	"doordat anderen interesse bij hem/haar opwekken",
	"Inzichten en ingevingen",
	"Hoog volume en wisselende toonhoogtes",
	"Deelt gemakkelijk gevoelens",
	"Inzet te doseren",
	"Neemt risico’s",
	"Voorbeelden en aanmoedigingspremies",
	"Waar het uiteindelijk om gaat",
];

export const zorgerPoints = [
	"Servicegerichtheid en luisteren",
	"Overgevoeligheid en Besluiteloosheid",
	"Ongevoeligheid",
	"geaccepteerd worden en een stabiele omgeving",
	"Plotselinge verandering",
	"Betrokkenheid en goedkeuring",
	"Verbinden",
	"Berusten",
	"Initiatief nemen",
	"Mogelijkheden biedt",
	"op een coöperatieve wijze",
	"Relaties en gevoelens",
	"Laag volume en wisselende toonhoogtes",
	"Deelt makkelijk gevoelens",
	"Relaties te behouden",
	"Vermijdt risico’s",
	"Garanties en toezeggingen",
	"wie er allemaal meedoet",
];

export const analyticusPoints = [
	"Planning en Analyse",
	"Perfectionisme en Overdreven kritisch",
	"onvoorspelbaarheid",
	"accuraat en gedegen zijn",
	"kritiek ontvangen",
	"structuur aanbrengen en respect ontvangen",
	"brengt systematiek aanbrengen",
	"vermijdend",
	"sneller beslissingen nemen",
	"informeert en beschrijft",
	"zo accuraat mogelijk",
	"principes en denkbeelden",
	"laag volume en monotoon",
	"houdt gevoelens voor zichzelf",
	"het voor hen op te nemen",
	"risicomijdend",
	"bewijs materiaal",
	"hoe het probleem wordt opgelost",
];


export const getCommunicationInfo = (target: TheoremTypes) =>
{
	switch (target)
	{
		case "analyticus":
			return [
				"Hoe communiceer je met een ‘blauwe’?",
				"Bereid je zeer goed voor en zorg voor feitelijk onderbouwing.",
				"Stel in het begin niet gelijk persoonlijke vragen, bewaar wat afstand.",
				"Geef de ander de tijd om het besprokene tot zich te nemen, te analyseren en/of om een correct antwoord te vinden.",
				"Wees op tijd en voorkom een nonchalante of informele indruk.",
				"Geef zoveel mogelijk schriftelijke informatie i.p.v. mondeling en laat de ander dit beoordelen.",
				"Houd zelf de regie in het gesprek.",
				"Maak duidelijk afspraken en kom deze na.",
				"Bied ruimte zodat de ander kan nadenken, dring niet te veel aan.",
				"N.B: Zelden is iemand volledig één kleur. Interpreteer deze uitleg dan ook met enige nuance."
			];
		case "motivator":
			return [
				"Hoe communiceer je met een ‘gele’?",
				"Zorg voor een vriendelijke en gezellige sfeer. ",
				"Zoek in het gesprek de verbinding op door betrokkenheid te tonen en iets van jezelf te laten zien. ",
				"Concentreer op het totaalplaatje.",
				"Toon interesse, stel veel vragen en luister actief.",
				"Help de ander om overzicht te krijgen en doe het indien nodig samen.",
				"Laat blijken dat je de ander aardig vindt, waardeert en goedkeurt.",
				"Vermijd details, verschaf deze indien nodig achteraf.",
				"Zorg voor een concreet vervolg.",
				"N.B: Zelden is iemand volledig één kleur. Interpreteer deze uitleg dan ook met enige nuance."
			];
		case "regisseur":
			return [
				"Hoe communiceer je met een ‘rode’?",
				"Wees goed voorbereid en heb de benodigde informatie paraat.",
				"Richt je tijdens een gesprek op de hoofdlijnen.",
				"Wees kort en to the point, vermijd wollig taalgebruik.",
				"Argumenteer met feiten en presenteer deze in logische en overzichtelijke volgorde.",
				"Laat zien hoe de ander kan winnen, creëer kansen en daag uit het spel te spelen.",
				"Stem met elkaar concrete doelen af en laat de ander het ‘hoe’ bepalen.",
				"Erken en benoem hetgeen de ander bereikt heeft, geef complimenten hierover.",
				"Geef ruimte en toestemming zodat de ander zelfstandig kan beslissen, geef daarbij kaders mee wat het speelveld aangeeft.",
				"N.B: Zelden is iemand volledig één kleur. Interpreteer deze uitleg dan ook met enige nuance."
			];

		case "zorger":
			return [
				"Hoe communiceer je met een ‘groene’?",

				"Zoek het juiste moment en creëer een ontspannen sfeer.",
				"Kom niet gelijk ter zake.",
				"Start met een persoonlijke opmerking, toon interesse bijvoorbeeld in de familie van de ander.",
				"Praat met rustige, gelijkmatige stem en voorkom stemverheffing.",
				"Laat zien dat je oprecht geïnteresseerd bent, luister goed en vraag door.",
				"Bereid de ander voor door hen mee te nemen in wat er komen gaat.",
				"Geef de ander bedenktijd wanneer je graag een goede reactie wilt.",
				"Maak de ander duidelijk hoe jouw voorstel risico’s beperkt op uitsluit.",
				"N.B: Zelden is iemand volledig één kleur. Interpreteer deze uitleg dan ook met enige nuance."
			];
	}
}
