// Dag 4–5: Funktioner som bygger sidans innehåll. Använd createElement och textContent.
import { formateraPris } from "./pris.js";
import { hittaRatt, totalPris } from "./meny.js";

export function skapaRattKort(ratt) {
  const kort = document.createElement("article");
  kort.dataset.id = ratt.id;

  const bild = document.createElement("img");
  bild.src = ratt.bild;
  bild.alt = `Illustration av ${ratt.namn.toLowerCase()}`;

  const rubrik = document.createElement("h3");
  rubrik.textContent = ratt.namn;

  const text = document.createElement("p");
  text.textContent = ratt.beskrivning;

  const pris = document.createElement("p");
  pris.className = "pris";
  pris.textContent = formateraPris(ratt.pris);

  // DAG 5, TODO: skapa en knapp och lägg den sist i kortet:
  //   <button type="button" class="lagg-i-order" data-id="1" aria-label="Lägg Kardemummabulle i beställningen">Lägg i beställning</button>
  kort.append(bild, rubrik, text, pris);
  return kort;
}

export function visaMeny(container, ratter) {
  container.replaceChildren();
  if (ratter.length === 0) {
    const tom = document.createElement("p");
    tom.className = "tom";
    tom.textContent = "Inga rätter hittades.";
    container.append(tom);
    return;
  }
  for (const ratt of ratter) {
    container.append(skapaRattKort(ratt));
  }
}

export function uppdateraRubrik(element, antal) {
  const ord = antal === 1 ? "rätt" : "rätter";
  element.textContent = `Meny (${antal} ${ord})`;
}

export function markeraDagensRatt(container, id) {
  for (const kort of container.querySelectorAll("article")) {
    kort.classList.toggle("dagens", kort.dataset.id === String(id));
  }
}

// DAG 5 (fördjupning): visa beställningen.
// ref = { lista, summa, tom } är tre element. order är [{ id, antal }].
//   - töm ref.lista och lägg in en <li> per rad: <span>2 × Kardemummabulle</span><span>70 kr</span>
//     (priset = rättens pris gånger antal, formaterat med formateraPris; hittaRatt hittar rätten)
//   - ref.tom (texten "Du har inte lagt något...") ska ha klassen "dold" när ordern INTE är tom
//   - ref.summa.textContent = totalpriset (totalPris från meny.js), formaterat
export function visaOrder(ref, order, meny) {
  // TODO
}
