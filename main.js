// Dag 5: Events. Menyn filtreras när man klickar, och bokningsformuläret valideras (kontakt.js).
import { meny } from "./data.js";
import { visaMeny, uppdateraRubrik, markeraDagensRatt, visaOrder } from "./ui.js";
import { billigast } from "./meny.js";
import { filtreraMeny } from "./filter.js";
import { kopplaFilter, kopplaLaggTill } from "./events.js";
import { laggTillIOrder, rensaOrder } from "./order.js";

const lista = document.querySelector("#meny-lista");
const rubrik = document.querySelector("#meny-rubrik");
const filterGrupp = document.querySelector("#filter");

// DEL 1: din första händelse -------------------------------------------
// 1. Hämta knappen .knapp i #hero. Lägg till en lyssnare för "click" som skriver ut
//    handelse.type och handelse.target i Console.
// 2. Lägg till handelse.preventDefault() i lyssnaren. Vad händer med länken?
//    Ta bort preventDefault igen när du provat.
// TODO


// DEL 2: filtret ----------------------------------------------------------
// 3. Skriv funktionen uppdateraMeny(filter): hämta rätter med filtreraMeny, visa dem med visaMeny,
//    uppdatera rubriken och markera den billigaste lunchen som dagens rätt (om det finns någon lunch).
// 4. Anropa uppdateraMeny("alla") direkt, och koppla filterknapparna med kopplaFilter.
// TODO


// DEL 3 (fördjupning): beställningen ---------------------------------------
// 5. let order = []; Koppla kopplaLaggTill(lista, ...) så att klick lägger till i order och visar den
//    med visaOrder. Koppla knappen #rensa-order till rensaOrder.
const orderRef = {
  lista: document.querySelector("#order-lista"),
  summa: document.querySelector("#order-summa"),
  tom: document.querySelector("#order-tom"),
};
// TODO
