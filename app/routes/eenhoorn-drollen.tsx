import type { Route } from "./+types/eenhoorn-drollen";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eenhoorn Drollen Maken - Magisch Recept" },
    { name: "description", content: "Leer hoe je magische eenhoorn drollen maakt met dit kleurrijke recept!" },
  ];
}

export default function EenhoornDrollen() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Hoe maak je Eenhoorn Drollen? 🦄✨
          </h1>
          <p className="text-xl text-muted-foreground">
            Een magisch en kleurrijk recept voor de meest fantastische snoepjes!
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950 rounded-lg p-8 mb-8">
          <div className="text-center text-8xl mb-4">🦄💩✨</div>
          <p className="text-center text-lg italic">
            "Waar magie en suiker elkaar ontmoeten"
          </p>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
          <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>📖</span> De Legende van de Eenhoorn Drollen
            </h2>
            <p className="text-muted-foreground mb-4">
              Lang geleden, in het mystieke Regenboogwoud, ontdekten de eerste feeën dat eenhoorns
              geen gewone drollen produceren. In plaats daarvan achterlaten deze magische wezens
              kleurrijke, glinsterende bolletjes die ruiken naar vanille en zoete dromen! 🌈
            </p>
            <p className="text-muted-foreground mb-4">
              Volgens de oude verhalen ontstaan eenhoorn drollen omdat eenhoorns zich voeden met
              wolken, sterrenglans en pure vreugde. Dit verklaart waarom hun... ehm... "achterlatenschap"
              zo ongelooflijk magisch en - tegen alle verwachtingen in - lekker is! (Let op: probeer
              NOOIT gewone drollen te eten, zelfs niet als ze glinsteren. Vertrouw ons. 🙈)
            </p>
            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="font-semibold mb-2">🦄 Feit of Fictie?</p>
              <p className="text-sm text-muted-foreground">
                Wetenschappers hebben nog nooit een echte eenhoorn gevonden, maar dat betekent niet
                dat ze niet bestaan! Ze verstoppen zich waarschijnlijk gewoon heel goed. Tot die tijd
                maken we onze eigen versie met marshmallows en chocolade - 100% eenhoorn-vrij, maar
                wel 100% magisch! ✨
              </p>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🎯</span> Wat zijn Eenhoorn Drollen eigenlijk?
            </h2>
            <p className="text-muted-foreground mb-4">
              Oké, nu de magische verhalen even terzijde: "Eenhoorn drollen" is gewoon een grappige,
              fantasierijke naam voor kleurrijke, regenboogachtige snoepjes die eruitzien als kleine,
              wervelige droppeltjes. Ze zijn gemaakt van marshmallows en gesmolten chocolade, bedekt
              met glinsterende suiker en regenboog sprinkles.
            </p>
            <p className="text-muted-foreground mb-4">
              Perfect voor verjaardagsfeestjes, magische bijeenkomsten of gewoon als een leuke
              traktatie! En ja, we geven toe dat de naam een beetje vreemd is, maar dat maakt het
              juist zo leuk. Kinderen vinden het hilarisch, volwassenen glimlachen erom, en iedereen
              wil ze proeven. 😄
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <p className="font-semibold mb-2">🤔 Waarom deze naam?</p>
              <p className="text-sm text-muted-foreground">
                De naam "eenhoorn drollen" komt uit de fantasiewereld waar alles wat eenhoorns doen
                magisch is - zelfs hun... natuurlijke processen! Het is een speelse manier om
                kinderen enthousiast te maken over koken en creativiteit. Plus, laten we eerlijk zijn:
                het is gewoon grappig om te zeggen! 🎪
              </p>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🛒</span> Ingrediënten
            </h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
              <p className="text-sm">
                <strong>🧙‍♂️ Magisch Feitje:</strong> In het Regenboogwoud verzamelen feeën deze ingrediënten
                om échte eenhoorn drollen na te maken. Witte chocolade symboliseert wolken, marshmallows zijn
                verwerkte dromen, en glitter is... nou ja, gewoon glitter. Zelfs in magische werelden is glitter
                gewoon glitter! ✨
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-lg">Basis ingrediënten:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🍬</span>
                    <span>200g witte chocolade <span className="text-xs text-muted-foreground">(a.k.a. "vloeibare wolken")</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">☁️</span>
                    <span>Mini marshmallows (ongeveer 30 stuks) <span className="text-xs text-muted-foreground">(gevangen dromen)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🌈</span>
                    <span>Voedselkleurstof (roze, paars, blauw, geel) <span className="text-xs text-muted-foreground">(regenboog essence)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">✨</span>
                    <span>Eetbaar glitter <span className="text-xs text-muted-foreground">(sterrenglans in poedervorm)</span></span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Decoratie:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🎨</span>
                    <span>Regenboog sprinkles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">⭐</span>
                    <span>Suiker parels in verschillende kleuren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">💫</span>
                    <span>Disco dust (eetbaar glinsterstof)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🌟</span>
                    <span>Mini sterretjes (optioneel)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>📝</span> Benodigdheden
            </h2>
            <ul className="grid md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span className="text-xl">🥣</span>
                <span>Magnetron-veilige kom</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🥄</span>
                <span>Spatel of lepel</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">📄</span>
                <span>Bakpapier</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🍴</span>
                <span>Vork of chocolade dipper</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🍽️</span>
                <span>Bakplaat</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🎨</span>
                <span>Kleine kommen voor kleurstoffen</span>
              </li>
            </ul>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>👨‍🍳</span> Stap-voor-stap Instructies
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 1: Voorbereiding</h3>
                <p className="text-muted-foreground">
                  Bedek een bakplaat met bakpapier. Zorg dat je alle ingrediënten en materialen
                  klaar hebt staan, want je moet snel werken als de chocolade gesmolten is!
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 2: Chocolade smelten</h3>
                <p className="text-muted-foreground">
                  Breek de witte chocolade in stukjes en doe het in een magnetron-veilige kom.
                  Smelt de chocolade in de magnetron in stappen van 30 seconden, roer goed tussen
                  elke stap. Doe dit tot de chocolade volledig gesmolten en glad is.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 3: Kleuren toevoegen</h3>
                <p className="text-muted-foreground">
                  Verdeel de gesmolten chocolade over meerdere kleine kommen. Voeg aan elke kom
                  een andere kleur voedselkleurstof toe (roze, paars, blauw, geel). Roer goed tot
                  de kleur volledig is opgenomen. Je kunt ook kleuren mengen voor extra tinten!
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 4: Marshmallows dompelen</h3>
                <p className="text-muted-foreground">
                  Prik een marshmallow op een vork of chocolade dipper. Dompel de marshmallow eerst
                  in één kleur chocolade, laat overtollige chocolade eraf druipen. Dompel daarna
                  een deel van de marshmallow in een andere kleur voor een werveling effect.
                  Herhaal dit met meerdere kleuren voor een echt regenboog effect!
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 5: Decoreren</h3>
                <p className="text-muted-foreground">
                  Terwijl de chocolade nog nat is, bestrooi je de marshmallow genereus met
                  regenboog sprinkles, glitter, suiker parels en disco dust. Wees niet zuinig -
                  hoe meer glitter, hoe magischer! Leg de gedecoreerde marshmallow voorzichtig
                  op het bakpapier.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 6: Laten drogen</h3>
                <p className="text-muted-foreground">
                  Laat de eenhoorn drollen minstens 30 minuten op kamertemperatuur drogen, of
                  zet ze 10-15 minuten in de koelkast voor sneller resultaat. Ze zijn klaar als
                  de chocolade hard is en niet meer plakt.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-xl mb-2">Stap 7: Presenteren!</h3>
                <p className="text-muted-foreground">
                  Schik je eenhoorn drollen op een mooi schaaltje of verpak ze in doorzichtige
                  zakjes met een lint. Ze zijn perfect voor feestjes, als cadeau, of gewoon om
                  zelf op te eten terwijl je geniet van hun magische uitstraling! ✨
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>💡</span> Pro Tips
            </h2>
            <div className="space-y-3">
              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🎨 Kleur intensiteit</p>
                <p className="text-sm text-muted-foreground">
                  Gebruik gel voedselkleurstof in plaats van vloeibare kleurstof voor intensievere
                  kleuren zonder de chocolade te verdunnen.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">❄️ Werk koel</p>
                <p className="text-sm text-muted-foreground">
                  Als de chocolade te snel hard wordt, warm hem dan kort op in de magnetron.
                  Werk in een koele ruimte voor de beste resultaten.
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">✨ Extra glitter</p>
                <p className="text-sm text-muted-foreground">
                  Voor extra magisch effect, meng wat eetbaar glitter door de chocolade voordat
                  je de marshmallows dompelt! <span className="italic">Oude eenhoorn wijsheid zegt:
                  "Te veel glitter bestaat niet!"</span> 🌟
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🎁 Bewaren</p>
                <p className="text-sm text-muted-foreground">
                  Bewaar eenhoorn drollen in een luchtdichte container op kamertemperatuur.
                  Ze blijven tot 2 weken goed (als ze zo lang overleven!). <span className="italic">
                  Let op: echte eenhoorn drollen blijven eeuwig magisch, maar deze versie heeft een
                  beperkte houdbaarheid.</span> 😉
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <p className="font-semibold mb-1">🦄 Authenticiteitstips</p>
                <p className="text-sm text-muted-foreground">
                  Om je eenhoorn drollen er nog echter uit te laten zien: maak ze in verschillende
                  groottes (eenhoorns zijn ook maar mensen... eh, paarden?), geef ze wervelvormige
                  patronen, en vergeet niet om tijdens het maken constant te geloven in magie.
                  Wetenschappelijk niet bewezen, maar wel leuker! 🌈
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <span>🎭</span> Alternatieve Namen & Variaties
            </h2>
            <p className="text-muted-foreground mb-4">
              Als "eenhoorn drollen" je een beetje té grappig vindt (of juist niet grappig genoeg!),
              probeer dan een van deze alternatieve namen:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <p className="font-semibold">✨ Magische Regenboog Bolletjes</p>
                <p className="text-xs text-muted-foreground">Voor de nette aanpak</p>
              </div>
              <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <p className="font-semibold">🌟 Eenhoorn Edelstenen</p>
                <p className="text-xs text-muted-foreground">Klinkt luxe én magisch</p>
              </div>
              <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <p className="font-semibold">💎 Regenboog Diamantjes</p>
                <p className="text-xs text-muted-foreground">Voor de fancy variant</p>
              </div>
              <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <p className="font-semibold">🦄 Glitter Pareltjes van Geluk</p>
                <p className="text-xs text-muted-foreground">Extra dramatisch</p>
              </div>
              <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <p className="font-semibold">💩 Gewoon... Poep</p>
                <p className="text-xs text-muted-foreground">Voor de brutale aanpak</p>
              </div>
              <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                <p className="font-semibold">🎨 Marshmallow Meesterwerken</p>
                <p className="text-xs text-muted-foreground">Voor de kunstzinnige benadering</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              Maar laten we eerlijk zijn: "eenhoorn drollen" blijft gewoon de leukste naam. 😄
            </p>
          </section>

          <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Veel plezier met je magische creaties! 🦄✨</h2>
            <p className="text-lg mb-4">
              Deel je eenhoorn drollen op social media en tag ons!
            </p>
            <div className="flex justify-center gap-4 text-4xl">
              🌈 💖 ✨ 🦄 💫 🎉
            </div>
          </section>

          <div className="mt-8 bg-muted rounded-lg p-6">
            <h3 className="font-bold mb-2">⚠️ Let op!</h3>
            <p className="text-sm text-muted-foreground">
              Dit recept is bedoeld voor gebruik onder toezicht van een volwassene. Wees voorzichtig
              met de hete chocolade. Controleer altijd of alle decoraties die je gebruikt eetbaar zijn.
              Mensen met een noten- of melkallergie moeten de ingrediëntenlijst van de chocolade controleren.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
