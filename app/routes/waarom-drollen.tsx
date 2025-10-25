import type { Route } from "./+types/waarom-drollen";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Waarom Bestaan Drollen? - Educatieve Uitleg" },
    { name: "description", content: "Leer alles over het menselijk spijsverteringssysteem en waarom poep belangrijk is!" },
  ];
}

export default function WaaromDrollen() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Waarom Bestaan Drollen? 💩
          </h1>
          <p className="text-xl text-muted-foreground">
            Een wetenschappelijke uitleg over het spijsverteringssysteem
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-100 via-yellow-100 to-orange-100 dark:from-green-950 dark:via-yellow-950 dark:to-orange-950 rounded-lg p-8 mb-8">
          <div className="text-center text-6xl mb-4">🍎 → 🫄 → 💩</div>
          <p className="text-center text-lg italic">
            "Van eten naar energie: de reis van je voedsel"
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🎯</span> Het Korte Antwoord
            </h2>
            <p className="text-muted-foreground mb-4">
              Drollen (ook wel poep, ontlasting of stoelgang genoemd) bestaan omdat je lichaam niet
              alles wat je eet kan gebruiken. Je spijsverteringssysteem haalt alle goede voedingsstoffen
              uit je eten - zoals vitamines, mineralen en energie. Wat overblijft, moet je lichaam
              verlaten, en dat gebeurt in de vorm van drollen!
            </p>
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold mb-2">🧬 Simpel gezegd:</p>
              <p className="text-sm text-muted-foreground">
                Poep is gewoon het afval dat overblijft nadat je lichaam alle nuttige dingen uit je
                eten heeft gehaald. Net zoals je de schil van een banaan weggooit, gooit je lichaam
                de "schil" van je eten weg - alleen op een andere manier! 🍌
              </p>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🍽️</span> De Reis van je Eten
            </h2>
            <p className="text-muted-foreground mb-4">
              Laten we de hele reis volgen, van het moment dat je een hap neemt tot... nou ja, je
              snapt het wel! Dit proces duurt ongeveer 24 tot 72 uur.
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>👄</span> Stap 1: De Mond (0-30 seconden)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Je tanden kauwen het eten in kleinere stukjes. Je speeksel maakt het nat en begint
                  al met het afbreken van suikers. Als je goed kauwt, maak je het makkelijker voor
                  de rest van je spijsverteringssysteem!
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🎺</span> Stap 2: De Slokdarm (2-3 seconden)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Als je slikt, gaat het eten door een lange buis (de slokdarm) naar je maag. De
                  spieren in deze buis duwen het eten naar beneden - zelfs als je op je kop staat!
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🫄</span> Stap 3: De Maag (2-6 uur)
                </h3>
                <p className="text-sm text-muted-foreground">
                  In je maag wordt het eten gemixt met maagzuur - een heel sterk zuur dat eten kan
                  afbreken tot een soort brij. Je maag knijpt en draait om alles goed te mengen.
                  Dit is waarom je maag kan rommelen!
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🌀</span> Stap 4: De Dunne Darm (3-5 uur)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dit is waar de magie gebeurt! De dunne darm is ongeveer 6-7 meter lang (zo lang
                  als een giraffe!). Hier worden alle goede voedingsstoffen uit je eten gehaald en
                  opgenomen in je bloed. Je lichaam gebruikt deze voedingsstoffen voor energie,
                  groei en om gezond te blijven.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🔄</span> Stap 5: De Dikke Darm (10-59 uur)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wat overblijft gaat naar de dikke darm. Hier wordt vooral water uit de brij gehaald,
                  zodat het niet te vloeibaar is. De dikke darm is ongeveer 1,5 meter lang. Hier
                  begint het te lijken op... je weet wel, poep! Ook leven hier miljarden bacteriën
                  die helpen met de laatste vertering.
                </p>
              </div>

              <div className="bg-brown-50 dark:bg-brown-950 p-4 rounded-lg border-l-4 border-brown-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>💩</span> Stap 6: De Endeldarm & Anus (eindelijk!)
                </h3>
                <p className="text-sm text-muted-foreground">
                  De poep wordt opgeslagen in de endeldarm tot je naar de wc gaat. Als de endeldarm
                  vol is, krijg je het gevoel dat je moet poepen. Dan ga je naar de wc en komen de
                  drollen eruit via de anus. Klaar!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🔬</span> Waar Bestaat Poep Eigenlijk Uit?
            </h2>
            <p className="text-muted-foreground mb-4">
              Poep is niet alleen afval! Het bestaat uit verschillende dingen:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">💧 Water (75%)</h3>
                <p className="text-sm text-muted-foreground">
                  Het grootste deel van je poep is water! Als je niet genoeg water drinkt, wordt je
                  poep hard en moeilijk om uit te poepen (constipatie).
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🦠 Bacteriën (30% van vaste deel)</h3>
                <p className="text-sm text-muted-foreground">
                  Miljarden dode en levende bacteriën! Deze bacteriën hielpen met de vertering in je
                  darmen. Niet eng - ze zijn juist heel belangrijk!
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🌾 Onverteerd Voedsel (30% van vaste deel)</h3>
                <p className="text-sm text-muted-foreground">
                  Vezels en andere dingen die je lichaam niet kan verteren, zoals de schillen van
                  groenten en fruit.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🎨 Andere Stoffen (rest)</h3>
                <p className="text-sm text-muted-foreground">
                  Dode cellen van je darmwand, vet, en stoffen die je lichaam moet afvoeren. Dit
                  geeft poep zijn kleur (meestal bruin door afgebroken rode bloedcellen)!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>❓</span> Waarom is Poepen Belangrijk?
            </h2>
            <div className="space-y-3">
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🗑️ Afval Verwijderen</h3>
                <p className="text-sm text-muted-foreground">
                  Je lichaam moet afvalstoffen kwijt. Als je niet zou poepen, zou al dat afval in
                  je lichaam blijven zitten en zou je heel ziek worden!
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">⚖️ Balans Behouden</h3>
                <p className="text-sm text-muted-foreground">
                  Poepen helpt je lichaam een goede balans te houden van water, zouten en andere
                  stoffen. Te veel van sommige dingen is niet goed!
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🏥 Gezondheid Checken</h3>
                <p className="text-sm text-muted-foreground">
                  De kleur, vorm en geur van je poep kunnen vertellen hoe gezond je bent. Dokters
                  vragen daar soms naar omdat het belangrijke informatie geeft!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🌍</span> Grappige Feitjes over Poep
            </h2>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🐘 Olifanten poepen wel 80 kg per dag!</p>
                <p className="text-sm text-muted-foreground">
                  Dat is ongeveer net zoveel als een volwassen mens weegt!
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🦙 Lama's en alpaca's hebben vierkante drollen</p>
                <p className="text-sm text-muted-foreground">
                  Waarom? Zodat ze niet van bergen afrollen!
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🐦 Vogels poepen wit omdat ze geen aparte plas hebben</p>
                <p className="text-sm text-muted-foreground">
                  Hun poep en plas komen tegelijk naar buiten, waardoor het wit wordt!
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">👶 Baby's in de baarmoeder maken geen poep</p>
                <p className="text-sm text-muted-foreground">
                  Hun eerste poep (meconium) komt pas na de geboorte. Het is groen-zwart en plakkerig!
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🌱 Poep kan nuttig zijn!</p>
                <p className="text-sm text-muted-foreground">
                  Dierenmest wordt gebruikt als mest voor planten. En olifantenpoep wordt zelfs
                  gebruikt om papier van te maken!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>💡</span> Tips voor Gezonde Poep
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="font-semibold mb-2">💧 Drink Genoeg Water</p>
                <p className="text-sm text-muted-foreground">
                  Water helpt je poep zacht te houden zodat het makkelijk naar buiten kan. Probeer
                  6-8 glazen water per dag te drinken!
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <p className="font-semibold mb-2">🥦 Eet Genoeg Vezels</p>
                <p className="text-sm text-muted-foreground">
                  Groenten, fruit, volkoren brood en peulvruchten bevatten vezels die je poep groter
                  en zachter maken. Dit helpt je spijsvertering!
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <p className="font-semibold mb-2">🏃 Beweeg Genoeg</p>
                <p className="text-sm text-muted-foreground">
                  Bewegen helpt je darmen om beter te werken. Sporten, fietsen of gewoon buiten
                  spelen helpt je spijsvertering!
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <p className="font-semibold mb-2">🚽 Luister naar je Lichaam</p>
                <p className="text-sm text-muted-foreground">
                  Als je moet poepen, ga dan! Het is niet goed om het op te houden. Neem de tijd
                  op de wc en stress niet.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Conclusie: Poep is Normaal en Belangrijk! 💩</h2>
            <p className="text-lg mb-4">
              Iedereen poept - mensen, dieren, zelfs koningen en prinsessen! Het is een natuurlijk
              en belangrijk proces dat je lichaam gezond houdt. Dus schaam je niet en praat er
              rustig over als je vragen hebt!
            </p>
            <div className="flex justify-center gap-4 text-4xl">
              🍎 🥗 💧 🏃 💩 ✅
            </div>
          </section>

          <div className="mt-8 bg-muted rounded-lg p-6">
            <h3 className="font-bold mb-2">📚 Meer Weten?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Als je vragen hebt over je spijsvertering of als poepen pijn doet of moeilijk is,
              praat er dan over met je ouders of een dokter. Ze kunnen je helpen!
            </p>
            <p className="text-sm text-muted-foreground">
              Deze informatie is bedoeld voor educatieve doeleinden en vervangt geen medisch advies.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
