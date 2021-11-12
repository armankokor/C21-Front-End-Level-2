let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  __want tussen de tekst zit een ""____________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype _____integer_______ waarom? ______want tussen het getal staan geen ""______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? want je mag de variabelen niet opnieuw gebruiken____________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____regel 17_________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de P__Parameter________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ___parameter_________ de waarde noemen we een A__Attribute________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _melding______ op het scherm met de tekst __vul je naam in hier,echt doen_______ deze tekst staan op regel __17_____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ___nee________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _er word iets verborgen__________________ en waar wordt deze in je HTML aangeroepen? ___regel 23_________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___regel 23________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ___die laat meerdere id's bestaan in het document________________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? __eerst is de foto verstopt en dan komt het terug_________________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen __33___________ en wanneer wordt deze aangeroepen _als je een getal typt__________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _van het getal_____________ en waar komt de waarde van getal vandaan? __myInt__________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? __hij neemt een string als parameter die hetzelfde is met de CSS selector dus zo is het geschikt om een element te zoeken of te selecteren_________________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? __je krijgt het antwoord van de som___________________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? __je krijgt een andere optel som___________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen __regel 39____________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ___de kleur___________ en waar komt de waarde van kleur vandaan? ___de style.color_________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _de style.fontsize___________ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _de kleur en de groote word bepaald____________________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven __je moet je naam schrijven_________ en wanneer gebeurt dat _als je op de klik op de button drukt_________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? je krijgt een melding maar je naam staat nu daar___________________ vul je antwoord in op de lijn.