// Dag 5: Bokningsformuläret. Kopplas på kontakt.html.
import { valideraNamn, valideraEpost, valideraTelefon, valideraDatum, valideraAntal, valideraFormular, dagensDatum } from "./validering.js";

const form = document.querySelector("#bokningsform");
const bekraftelse = document.querySelector("#bekraftelse");

// Vilken regel hör till vilket fält? Nyckeln är fältets name-attribut.
const regler = {
  namn: valideraNamn,
  epost: valideraEpost,
  telefon: valideraTelefon,
  datum: (text) => valideraDatum(text, dagensDatum()),
  antal: valideraAntal,
};

// 1. visaFel(falt, meddelande): visa ett felmeddelande under fältet.
//    - Finns det inget <p class="falt-fel" id="NAMN-fel"> efter fältet? Skapa det (insertAdjacentElement("afterend", p)).
//    - p.textContent = meddelande
//    - Är meddelandet tomt: ta bort aria-invalid och aria-describedby från fältet.
//      Annars: falt.setAttribute("aria-invalid", "true") och aria-describedby = p:ts id.
function visaFel(falt, meddelande) {
  // TODO
}

// 2. Koppla varje fält i regler: validera när användaren LÄMNAR fältet ("blur"),
//    och validera på nytt vid "input" men bara om fältet redan är markerat som fel (aria-invalid="true").
// TODO

// 3. Vid "submit": preventDefault(). Validera hela formuläret med valideraFormular.
//    - Finns fel: visa dem alla med visaFel, flytta fokus till första felaktiga fältet.
//    - Annars: skriv "Tack! Vi bekräftar din bokning inom ett dygn." i #bekraftelse och töm formuläret (form.reset()).
//    Tips: new FormData(form) och Object.fromEntries(...) ger { namn, epost, ... }
// TODO
