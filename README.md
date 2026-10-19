# Dag 5 · Events och formulär

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du får kaféets sida att **reagera på användaren**: en klickbar filtrering av menyn, en beställning som växer, och ett bokningsformulär som kontrollerar sig självt med tydliga, tillgängliga felmeddelanden. Logiken ligger i små funktioner som du testar, och själva kopplingen till sidan ligger i `main.js` och `kontakt.js`.

## Bakgrund

Hittills har dina program körts en gång när sidan laddas. Nu får de **lyssna**. En *händelse* (event) är något som sker: ett klick, en tangent, ett formulär som skickas. Du säger "när det här händer, kör den här funktionen". Det är sidans interaktivitet i ett nötskal. Idag lär du dig också att validera formulär så att användaren får hjälp på rätt sätt, vilket är något du har tränat på att tänka på sedan modul 2 och 3.

## Så arbetar du (samma som alltid)

1. **Forka** dagens repo på GitHub (*Fork → Create fork*).
2. **Klona din fork:** *Code → HTTPS → kopiera adressen*. I terminalen (Ctrl+ö i VS Code): `git clone <adressen>`. Öppna den nya mappen i VS Code och starta *Live Server*.
3. **Gör uppgiften.** Spara och kontrollera i webbläsaren och Console (F12) efter varje steg. Gör en commit efter varje avslutat steg: `git add .` och `git commit -m "Beskriv vad du gjorde"`.
4. **Skicka upp** när du är klar: `git push`.
5. **Fortsätt i `mitt-projekt`** med dagens projektsteg (längre ned).
6. **Lämna in i Microsoft Forms.**

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

Filer som använder `import` fungerar bara när sidan öppnas med *Live Server*. Dubbelklickar du på en HTML-fil hamnar du på `file://` och får ett CORS-fel i Console.

## Uppgiften steg för steg

### Steg 1. Din första händelse

Öppna `main.js`, del 1. Lägg en lyssnare på knappen i hero som skriver ut `handelse.type` och `handelse.target` i Console. Klicka, och titta. Prova sedan `handelse.preventDefault()` och se vad som händer med länken. Ta bort den igen.

### Steg 2. filtreraMeny

Skriv den rena funktionen `filtreraMeny(meny, filter)` i `filter.js`. Filtret är `"alla"`, `"vegetarisk"` eller en kategori. Kör `tests.html`: fyra tester ska bli gröna.

### Steg 3. Event delegation: kopplaFilter

I `events.js`: skriv `kopplaFilter`. En enda lyssnare på gruppen (inte en per knapp) som använder `handelse.target.closest(...)`. Den ska flytta `aria-pressed` och anropa en callback. Läs testerna: ett av dem klickar på en `span` *inuti* en knapp. Varför ska det fungera?

### Steg 4. Koppla ihop menyn

I `main.js`, del 2: skriv `uppdateraMeny(filter)` som filtrerar, visar kort, uppdaterar rubriken och markerar dagens rätt (billigaste lunchen, om det finns någon). Anropa den en gång direkt och koppla den till filterknapparna. Testa alla fem filter på sidan, och tryck på knapparna med *tangentbordet* (Tab och Enter).

### Steg 5. Lägg-i-beställning-knappen

I `ui.js`: lägg en `button` sist i varje kort i `skapaRattKort` (klass `lagg-i-order`, `data-id`, och ett `aria-label` som nämner rätten så att skärmläsare kan skilja knapparna åt). Skriv `kopplaLaggTill` i `events.js`.

### Steg 6. Fördjupning: beställningen

Skriv `laggTillIOrder`, `rensaOrder` och `antalIOrder` i `order.js` (nya arrayer, ändra aldrig originalet) och `visaOrder` i `ui.js`. Koppla ihop dem i `main.js`, del 3. Det här steget är fördjupning, så hoppa över det om tiden tar slut. Gör då steg 7 och 8 först.

### Steg 7. Valideringsfunktionerna

I `validering.js`: skriv `valideraNamn`, `valideraEpost`, `valideraTelefon`, `valideraDatum`, `valideraAntal` och `valideraFormular`. De är rena funktioner som returnerar ett meddelande eller en tom text. Meddelandena står i testerna, och du ska följa dem ordagrant.

### Steg 8. Koppla formuläret i kontakt.js

Skriv `visaFel` (skapar `p.falt-fel`, sätter `aria-invalid` och `aria-describedby`), validera vid `blur`, validera om vid `input` när fältet redan är markerat som fel, och hantera `submit`: `preventDefault`, flytta fokus till första felet, annars visa en bekräftelse i `#bekraftelse` (som är en `aria-live`-ruta).

### Steg 9. Testa som en användare

Öppna `kontakt.html`. Testa: skicka tomt, fyll i felaktig e-post, rätta, skicka giltigt. Testa sedan *enbart med tangentbordet*, och slå på en skärmläsare (NVDA på Windows) i två minuter och lyssna på ett felmeddelande. Skriv i en kommentar vad du hörde.

## AI-spåret (nivå 2: Specificera och jämför)

**Specificera en funktion** (cirka 25 minuter, efter att du gjort din egen lösning)

Du beskriver exakt vad koden ska göra och skriver testerna. AI föreslår kod, du kör testerna, jämför och förstår. Att beskriva exakt vad som ska hända är en av de viktigaste färdigheterna när AI skriver koden.

Regler: egen lösning först, du ska kunna förklara varje rad, och du loggar i `docs/ai-logg.md` i `mitt-projekt` under rubriken *Modul 5*. Reglerna står i `AI-REGLER-MODUL5.md`.

1. Skriv en specifikation för din filterfunktion: indata, utdata och tre hörnfall.
2. Skriv testerna utifrån specifikationen innan du ber om kod.
3. Be AI skriva funktionen med prompten nedan.
4. Kör dina tester. Misslyckas något: ändra specifikationen, inte bara koden.
5. Jämför med din egen version. Vilken är enklast att förstå?

Prompt att utgå från:

```
Skriv en JS-funktion enligt denna specifikation:
[din specifikation]
Använd inga bibliotek. Förklara varje rad med en
kommentar. Här är mina tester som ska gå gröna:
[klistra in testerna]
```

**Kontrollera med:**

- Dina egna tester avgör, inte AI:s ord.
- Läs varje rad. Finns något du inte förstår?
- Testa i webbläsaren med Live Server.

**I ditt projekt:** Skriv en specifikation och tester för ett filter i ditt projekt, låt AI föreslå koden och logga hur många försök det tog.

## Kontrollista: så vet du att du är klar

- [ ] Alla tester på `tests.html` är gröna, utom eventuellt fördjupningen (order).
- [ ] Alla fem filterknappar fungerar, och `aria-pressed` följer den valda knappen.
- [ ] Du använder event delegation, med en lyssnare på föräldern.
- [ ] `kontakt.html` visar felmeddelanden vid blur och submit, och fokus flyttas till första felet.
- [ ] Felmeddelanden är text (inte bara färg) och kopplade med `aria-describedby`.
- [ ] Du har testat både filter och formulär med bara tangentbordet.
- [ ] Du har gjort minst sex commits.
- [ ] Du har gjort AI-uppgiften och skrivit en post i `docs/ai-logg.md` i `mitt-projekt`.

## Tips om du fastnar

- Inget händer vid klick? Skriv ut `console.log("klick")` allra först i funktionen. Kommer det? Då är det logiken. Kommer det inte? Då är det kopplingen (fel väljare, null, eller fel ordning).
- `handelse.target` är det du klickade på (kanske en `span` inuti knappen). `closest` letar uppåt och hittar knappen.
- `dataset.id` är alltid text. `Number(...)` gör om det till ett tal, annars matchar inte `===`.
- Formuläret laddar om sidan? Du har glömt `handelse.preventDefault()` i submit-lyssnaren.
- `form.elements.namn` hämtar fältet med `name="namn"`. `FormData` ger alla värden som text.
- Lyssnare på element som byggts om försvinner. Därför lyssnar vi på föräldern som aldrig byggs om.

## Ditt projekt: Interaktion och validering i ditt projekt

Efter övningen jobbar du vidare i `mitt-projekt`, samma repo som i modul 4. Övningen här är träningsbanan, projektet är det som växer. Dagens steg står också i `PROJEKTSTEG-MODUL5.md` (som du kopierar till ditt projekt dag 1), under **Dag 5**.

1. Skapa `js/events.js` och koppla minst två olika sorters interaktion i din sida (till exempel ett filter, en sökning eller en knapp som visar och döljer något), med event delegation där det passar.
2. Skriv en ren funktion för din filtrering eller sökning, och minst tre tester.
3. Skapa `js/validering.js` med minst två valideringsfunktioner för ditt formulär från modul 4, och minst fyra tester.
4. Koppla formuläret: felmeddelanden vid `blur` och `submit`, `aria-invalid`, `aria-describedby`, och fokus till första felet.
5. Testa allt med bara tangentbordet.
6. Commit och push.

**Klart när:** Minst tre olika interaktiva element fungerar, och formuläret validerar med tillgängliga felmeddelanden.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Länk till ditt `mitt-projekt`.
3. Reflektion: Varför lyssnar vi på föräldern (event delegation) istället för på varje knapp? Och varför valideras formuläret både vid `blur` och vid `submit`?

## Vill du mer? (frivilligt)

- Spara beställningen i `localStorage` (`JSON.stringify` och `JSON.parse`) så att den finns kvar efter omladdning.
- Validera också radioknapparna (`svar`) och lägg till `aria-invalid` på gruppen.
- Lägg till en tangentbordsgenväg: Escape rensar filtret.
