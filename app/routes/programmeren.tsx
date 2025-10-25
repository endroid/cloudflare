import type { Route } from "./+types/programmeren";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leer Programmeren - Introductie tot Coderen" },
    { name: "description", content: "Ontdek wat programmeren is en hoe je kunt beginnen met coderen!" },
  ];
}

export default function Programmeren() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Leer Programmeren 💻
          </h1>
          <p className="text-xl text-muted-foreground">
            Ontdek de wereld van code en maak je eigen programma's!
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 rounded-lg p-8 mb-8">
          <div className="text-center text-6xl mb-4">👨‍💻 → 💡 → 🚀</div>
          <p className="text-center text-lg italic">
            "Van idee naar werkelijkheid met code"
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🎯</span> Wat is Programmeren?
            </h2>
            <p className="text-muted-foreground mb-4">
              Programmeren (ook wel coderen genoemd) is het geven van instructies aan een computer
              in een taal die de computer begrijpt. Net zoals je een recept volgt om een taart te
              bakken, volgt een computer jouw code om iets te doen.
            </p>
            <p className="text-muted-foreground mb-4">
              Met programmeren kun je websites bouwen, apps maken, games ontwikkelen, robots
              besturen, en nog veel meer! Eigenlijk alles wat je op een scherm ziet of wat
              electronisch werkt, is door iemand geprogrammeerd.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold mb-2">💡 Simpel gezegd:</p>
              <p className="text-sm text-muted-foreground">
                Als computers mensen waren die alleen Nederlands begrepen, dan is programmeren het
                schrijven van heel duidelijke, precieze instructies in het Nederlands. Maar in
                plaats van Nederlands gebruiken we programmeertalen zoals Python, JavaScript of Java!
              </p>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🌟</span> Waarom Leren Programmeren?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>🎨</span> Creativiteit
                </h3>
                <p className="text-sm text-muted-foreground">
                  Maak je eigen games, websites, apps of kunstwerken. Je fantasie is de enige grens!
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>🧠</span> Probleemoplossend Denken
                </h3>
                <p className="text-sm text-muted-foreground">
                  Programmeren leert je logisch en gestructureerd nadenken over problemen.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>💼</span> Carrièrekansen
                </h3>
                <p className="text-sm text-muted-foreground">
                  Er is enorme vraag naar programmeurs. Het is een waardevolle vaardigheid!
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span>🚀</span> De Toekomst Begrijpen
                </h3>
                <p className="text-sm text-muted-foreground">
                  Technologie is overal. Programmeren helpt je begrijpen hoe de wereld werkt.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🗣️</span> Populaire Programmeertalen
            </h2>
            <p className="text-muted-foreground mb-4">
              Er zijn honderden programmeertalen, elk met hun eigen sterke punten. Hier zijn enkele
              van de meest populaire:
            </p>

            <div className="space-y-4">
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🐍</span> Python
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Beste voor:</strong> Beginners, data analyse, AI, automatisering
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Python is super beginner-vriendelijk en heeft een duidelijke, leesbare syntax.
                  Het wordt veel gebruikt in wetenschap, data science en machine learning.
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-3 rounded mt-2 font-mono text-sm">
                  <code>print("Hallo wereld!")</code>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🌐</span> JavaScript
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Beste voor:</strong> Websites, web apps, interactiviteit
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  De taal van het internet! Elke website die je bezoekt gebruikt JavaScript.
                  Perfect voor wie websites wil maken die "leven".
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-3 rounded mt-2 font-mono text-sm">
                  <code>console.log("Hallo wereld!");</code>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>☕</span> Java
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Beste voor:</strong> Android apps, enterprise software
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Een van de meest gebruikte talen ter wereld. Veel Android apps zijn in Java
                  geschreven. Ook populair bij grote bedrijven.
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-3 rounded mt-2 font-mono text-sm">
                  <code>System.out.println("Hallo wereld!");</code>
                </div>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>⚛️</span> TypeScript
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Beste voor:</strong> Grote web applicaties, moderne frontends
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  JavaScript maar dan met types! Helpt je fouten te voorkomen en wordt steeds
                  populairder. Deze website is ermee gebouwd!
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-3 rounded mt-2 font-mono text-sm">
                  <code>console.log("Hallo wereld!");</code>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🎨</span> HTML & CSS
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Beste voor:</strong> Website structuur en styling
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Technisch geen "echte" programmeertalen, maar wel essentieel voor websites!
                  HTML is de structuur, CSS is de styling.
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-3 rounded mt-2 font-mono text-sm">
                  <code>&lt;h1&gt;Hallo wereld!&lt;/h1&gt;</code>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🎓</span> Hoe Begin Je?
            </h2>
            <p className="text-muted-foreground mb-4">
              Programmeren leren is als een nieuwe taal leren - het kost tijd en oefening, maar
              iedereen kan het leren! Hier is een stappenplan:
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2">1️⃣ Kies een Taal</h3>
                <p className="text-sm text-muted-foreground">
                  Begin met Python (makkelijk) of JavaScript (voor websites). Kies er één en focus
                  daarop. Je kunt later altijd andere talen leren!
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2">2️⃣ Volg een Online Cursus</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Er zijn veel gratis resources:
                </p>
                <ul className="text-sm text-muted-foreground list-disc ml-6 space-y-1">
                  <li><strong>Codecademy</strong> - Interactieve lessen</li>
                  <li><strong>freeCodeCamp</strong> - Gratis en uitgebreid</li>
                  <li><strong>Khan Academy</strong> - Voor jongere leerlingen</li>
                  <li><strong>YouTube</strong> - Oneindig veel tutorials</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2">3️⃣ Schrijf Code Elke Dag</h3>
                <p className="text-sm text-muted-foreground">
                  Zelfs als het maar 15 minuten is. Consistentie is belangrijker dan lange
                  sessies af en toe. Programmeren is een vaardigheid die je moet trainen!
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2">4️⃣ Bouw Projecten</h3>
                <p className="text-sm text-muted-foreground">
                  Theorie is belangrijk, maar je leert het meest door te doen! Begin met kleine
                  projecten: een calculator, een to-do lijst, een simpel spelletje.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2">5️⃣ Maak Fouten en Leer Ervan</h3>
                <p className="text-sm text-muted-foreground">
                  Fouten (bugs) zijn normaal! Elke programmeur maakt ze, zelfs de beste. Het
                  debuggen (fouten oplossen) is een essentieel onderdeel van programmeren.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 p-4 rounded-lg">
                <h3 className="font-bold mb-2">6️⃣ Vraag om Hulp</h3>
                <p className="text-sm text-muted-foreground">
                  Vastgelopen? Google is je beste vriend! Ook zijn er communities zoals Stack
                  Overflow, Reddit's r/learnprogramming, en Discord servers waar mensen je helpen.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🛠️</span> Belangrijke Programmeer Concepten
            </h2>
            <p className="text-muted-foreground mb-4">
              Deze concepten komen in bijna elke programmeertaal voor:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">📦 Variabelen</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Een "doosje" waar je informatie in opslaat. Bijvoorbeeld: naam = "Jan"
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded font-mono text-xs">
                  <code>let leeftijd = 25;</code>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔀 If/Else Statements</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Laat de computer beslissingen nemen: "Als dit waar is, doe dat"
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded font-mono text-xs">
                  <code>if (regen) {'{pak paraplu}'}</code>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔁 Loops</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Herhaal iets meerdere keren. Bijvoorbeeld: tel van 1 tot 100
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded font-mono text-xs">
                  <code>for (i = 0; i &lt; 10; i++)</code>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">⚙️ Functies</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Een herbruikbaar stukje code. Zoals een recept dat je vaker kunt gebruiken
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded font-mono text-xs">
                  <code>function begroet() {'{}'}</code>
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">📋 Arrays</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Een lijst van items. Bijvoorbeeld: [appel, peer, banaan]
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded font-mono text-xs">
                  <code>let fruit = ["🍎", "🍐"];</code>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🏗️ Objects</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Een verzameling van eigenschappen. Zoals een persoon met naam en leeftijd
                </p>
                <div className="bg-black/10 dark:bg-white/10 p-2 rounded font-mono text-xs">
                  <code>{'{'}naam: "Jan", age: 25{'}'}</code>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>💡</span> Tips voor Beginnende Programmeurs
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🎯 Start Klein</p>
                <p className="text-sm text-muted-foreground">
                  Probeer niet meteen Facebook na te bouwen! Begin met simpele projecten en werk
                  je langzaam omhoog. Elke expert is ooit een beginner geweest.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🔍 Google is je Vriend</p>
                <p className="text-sm text-muted-foreground">
                  Professionele programmeurs googlen de hele dag! Het is geen cheaten - het is slim
                  werken. Leer hoe je de juiste vragen stelt aan zoekmachines.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">💪 Geef Niet Op</p>
                <p className="text-sm text-muted-foreground">
                  Programmeren kan frustrerend zijn. Je code werkt niet, je snapt iets niet, je
                  voelt je dom. Dat is NORMAAL. Doorzetten loont altijd!
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🧩 Leer de Logica, niet de Syntax</p>
                <p className="text-sm text-muted-foreground">
                  Specifieke code kun je altijd opzoeken. Focus op het begrijpen van HOE je
                  problemen oplost met code, niet het uit je hoofd leren van syntax.
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">👥 Leer van Anderen</p>
                <p className="text-sm text-muted-foreground">
                  Lees code van anderen op GitHub, volg tutorials, doe mee aan communities. Je
                  leert enorm veel door te zien hoe anderen problemen oplossen!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🎮</span> Leuke Beginner Projecten
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">🎲 Raad het Getal</h3>
                <p className="text-sm text-muted-foreground">
                  Computer kiest een nummer, jij raadt. Perfect voor loops en if-statements!
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">✅ To-Do Lijst</h3>
                <p className="text-sm text-muted-foreground">
                  Voeg taken toe, verwijder ze, markeer als gedaan. Leer arrays en DOM manipulatie!
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">🧮 Calculator</h3>
                <p className="text-sm text-muted-foreground">
                  Een simpele calculator voor +, -, × en ÷. Leer functies en user input!
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">⭕ Boter-Kaas-Eieren</h3>
                <p className="text-sm text-muted-foreground">
                  Klassiek spelletje! Leer over game logic en 2D arrays.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">🌡️ Temperatuur Converter</h3>
                <p className="text-sm text-muted-foreground">
                  Celsius naar Fahrenheit en vice versa. Simpel maar leerzaam!
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 p-4 rounded-lg">
                <h3 className="font-semibold mb-1">🎨 Persoonlijke Website</h3>
                <p className="text-sm text-muted-foreground">
                  Bouw je eigen site met HTML, CSS en JavaScript. Jouw digitale portfolio!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar om te Beginnen? 🚀</h2>
            <p className="text-lg mb-4">
              Programmeren is een van de meest waardevolle vaardigheden die je kunt leren in de
              21e eeuw. Het opent deuren naar creatieve projecten, carrièremogelijkheden en een
              beter begrip van de wereld om je heen.
            </p>
            <p className="text-lg font-semibold">
              De beste tijd om te beginnen was gisteren. De op één na beste tijd is NU! 💪
            </p>
            <div className="flex justify-center gap-4 text-4xl mt-6">
              💻 ➡️ 🧠 ➡️ 💡 ➡️ 🎉
            </div>
          </section>

          <div className="mt-8 bg-muted rounded-lg p-6">
            <h3 className="font-bold mb-2">📚 Handige Resources</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-6">
              <li><strong>MDN Web Docs</strong> - De bijbel voor web development</li>
              <li><strong>Stack Overflow</strong> - Q&A community voor programmeurs</li>
              <li><strong>GitHub</strong> - Bekijk en deel code met de wereld</li>
              <li><strong>CodePen</strong> - Experimenteer met HTML, CSS en JavaScript online</li>
              <li><strong>VS Code</strong> - Gratis, krachtige code editor</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
