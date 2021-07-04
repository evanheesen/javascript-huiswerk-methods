// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

//1. Check of cijfer >= 8

const gradesCumLaude = grades.slice(); //creëer een referentieloze lijst op basis van de grades lijst

for (let i = 0; i < gradesCumLaude.length; i++) {
    if (gradesCumLaude[i] < 8) { //als cijfer in lijst is lager dan 8
        gradesCumLaude.splice(i, 1); //dan verwijder i (1 item) en voeg 0 items toe.
        i--; //verlaag i met 1, omdat de lijst met 1 is afgenomen
    }
}

console.log("De uitkomst van opdracht 1a is: " + gradesCumLaude.length + " (aantal Cum laude afgestudeerden uit grades array)");

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(gradesInput) {
    for (let i = 0; i < gradesInput.length; i++) {
        if (gradesInput[i] < 8) { //als cijfer in lijst is lager dan 8
            gradesInput.splice(i, 1); //dan verwijder i (1 item) en voeg 0 items toe.
            i--; //verlaag i met 1, omdat de lijst met 1 is afgenomen
        }
    }
    return gradesInput.length;
}

amountCumLaude = cumLaude([8, 9, 4, 6, 10]);
console.log("De uitkomst van opdracht 1b is: " + amountCumLaude + " (aantal Cum laude afgestudeerden uit ingevoerde array)");


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143


const gradesTemp = grades.slice(); //Creëer een referentieloze lijst op basis van de grades lijst

let amountGrades = 0;

//maak een for loop waarbij elk cijfer bij het vorige wordt opgeteld, om zo het totaal uit de lijst te krijgen
function calculateAverage() {
    amountGrades = gradesTemp.length; //Bereken aantal cijfers in cijfers
    for (let i = 1; i < amountGrades; i++) {
        gradesTemp[0] = gradesTemp[0] + gradesTemp[i]; // i waarde optellen bij item 0 uit lijst
    }
    const totalGrades = gradesTemp[0]; //geeft totaal item 0 uit lijst
    const averageGrade = totalGrades / amountGrades; //deel het totaal van alle cijfers door het aantal cijfers in de lijst
    return averageGrade;
}

console.log("De uitkomst van opdracht 2a is: " + calculateAverage() + " (gemiddelde van grades array)"); //deel het totaal van alle cijfers door het aantal cijfers in de lijst


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


function averageGrade(gradesInput) {
    const gradesInputTemp = gradesInput.slice();
    amountGrades = gradesInputTemp.length;
    for (let i = 1; i < amountGrades; i++) {
        gradesInputTemp[0] = gradesInputTemp[0] + gradesInputTemp[i]; // i waarde optellen bij 0
    }
    const totalGrades = gradesInputTemp[0]; //geeft totaal item 0 uit lijst
    const averageGrade = totalGrades / amountGrades; //deel het totaal van alle cijfers door het aantal cijfers in de lijst
    return averageGrade;
}

const averageGrades = averageGrade([8, 9, 4, 6, 10]);
console.log("De uitkomst van opdracht 2b is: " + averageGrades + " (gemiddelde van ingegeven lijst)");


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

const roundedAverageGrade = averageGrades.toFixed(2);
console.log("De uitkomst van opdracht 2c is: " + roundedAverageGrade + " (afgerond gemiddelde van ingegeven lijst)");

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

//Stap 1: Maak nieuwe lijst waarin hoogste getal wordt opgeslagen
const highestGradeList = [0];
//Stap 2: Maak een for loop om ieder getal in de lijst door te lopen
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGradeList[0]) { //als huidige getal hoger is dan getal in highestGradeList
        highestGradeList.splice(0, 1, grades[i]); //vervang het getal in highestGradeList door huidige getal
    }
}
//Stap 3: Maak een variabele voor het hoogste getal
const highestGradeInList = highestGradeList[0];
//Stap 4: Loggen hoogste getal
console.log("De uitkomst van opdracht 3a is: " + highestGradeInList + " (hoogste getal uit grades array");


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

let highestGradeInList2 = 0;

function highestGrade(gradesInput) {
    const highestGradeArray = [0];
    for (let i = 0; i < gradesInput.length; i++) {
        if (gradesInput[i] > highestGradeArray[0]) { //als huidige getal hoger is dan getal in highestGradeList
            highestGradeArray.splice(0, 1, gradesInput[i]); //vervang het getal in highestGradeList door huidige getal
        }
    }
    highestGradeInList2 = highestGradeArray[0];
    return highestGradeInList2;
}

highestGradeInList2 = highestGrade([8, 9, 4, 6, 10]);

console.log("De uitkomst van opdracht 3b is: " +highestGradeInList2 +" (hoogste getal uit ingegeven lijst)");