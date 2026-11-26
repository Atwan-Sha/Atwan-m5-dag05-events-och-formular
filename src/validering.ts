// Dag 5: Validering av bokningsformuläret. Rena funktioner, lätta att testa.
// Varje valideraX-funktion tar ett värde (text) och returnerar ett felmeddelande som text,
// eller en tom text "" om värdet är giltigt. Meddelandena står i tests.js.

// Namn: obligatoriskt, minst 2 tecken efter trim().
export function valideraNamn(text: string): string {
	const namn = text.trim();
	if (namn === '') return 'Fyll i ditt namn.';
	if (namn.length < 2) return 'Namnet måste vara minst 2 tecken.';
	return '';
}
// E-post: obligatorisk, måste innehålla @, och ha formen text@text.text.
export function valideraEpost(text: string): string {
	const epost = text.trim();
	if (epost === '') return 'Fyll i din e-postadress.';
	if (!epost.includes('@')) return 'E-postadressen måste innehålla @.';
	const epostMonster = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
	if (!epostMonster.test(epost)) {
		return 'Ange en giltig e-postadress, till exempel namn@exempel.se.';
	}
	return '';
}

// Telefon: VALFRI (tom text är giltigt). Annars bara siffror, mellanslag, + och -, och minst 7 siffror.
export function valideraTelefon(text: string): string {
	const telefon = text.trim();
	if (telefon === '') return '';
	let antalSiffror = 0;
	for (const tecken of telefon) {
		if (tecken >= '0' && tecken <= '9') {
			antalSiffror++;
		} else if (tecken !== ' ' && tecken !== '+' && tecken !== '-') {
			return 'Telefonnumret får bara innehålla siffror, mellanslag, plus och bindestreck.';
		}
	}
	if (antalSiffror < 7) return 'Telefonnumret är för kort.';
	return '';
}

// Datum: obligatoriskt. text och idag är datum som "2026-10-19". Inte före idag.
export function valideraDatum(text: string, idag: string): string {
	const datum = text.trim();
	if (datum === '') return 'Välj ett datum.';
	if (datum < idag) return 'Datumet kan inte vara i det förflutna.';
	return '';
}

// Antal personer: obligatoriskt (en tom text betyder att inget valts).
export function valideraAntal(text: string): string {
	const antal = text.trim();
	if (antal === '') return 'Välj antal personer.';
	return '';
}

// Dagens datum som "2026-10-19" (färdig, du behöver inte ändra den).
export function dagensDatum(): string {
	return new Date().toLocaleDateString('sv-SE');
}

// Validera ett helt formulär. varden = { namn, epost, telefon, datum, antal } (texter).
// Returnera ett objekt med BARA de fält som har fel: { namn: "Fyll i ditt namn." }
// Giltigt formulär ger ett tomt objekt {}.
export function valideraFormular(
	varden: Record<string, string>,
	idag: string,
): Record<string, string> {
	const fel: Record<string, string> = {};

	const namnFel = valideraNamn(varden.namn ?? '');
	if (namnFel !== '') fel.namn = namnFel;

	const epostFel = valideraEpost(varden.epost ?? '');
	if (epostFel !== '') fel.epost = epostFel;

	const telefonFel = valideraTelefon(varden.telefon ?? '');
	if (telefonFel !== '') fel.telefon = telefonFel;

	const datumFel = valideraDatum(varden.datum ?? '', idag);
	if (datumFel !== '') fel.datum = datumFel;

	const antalFel = valideraAntal(varden.antal ?? '');
	if (antalFel !== '') fel.antal = antalFel;

	return fel;
}
