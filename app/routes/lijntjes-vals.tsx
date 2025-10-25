import { useState } from "react";
import type { Route } from "./+types/lijntjes-vals";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lijntjes Vals - De Computer Tekent Extra Lijnen!" },
    { name: "description", content: "De computer tekent gewoon extra lijntjes om te winnen. Totaal oneerlijk!" },
  ];
}

type Player = "X" | "O" | null;
type Board = Player[];

interface DrawnLine {
  readonly from: number;
  readonly to: number;
  readonly message: string;
}

export default function LijntjesVals() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [drawnLines, setDrawnLines] = useState<DrawnLine[]>([]);
  const [computerWins, setComputerWins] = useState(0);
  const [playerAttempts, setPlayerAttempts] = useState(0);

  const handleClick = (index: number) => {
    if (board[index] || !isPlayerTurn) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);

    // Computer's turn - always finds a way to "win"
    setTimeout(() => {
      const computerBoard = [...newBoard];

      // Find any empty spot for computer
      const available = computerBoard.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
      if (available.length > 0) {
        const computerIndex = available[Math.floor(Math.random() * available.length)];
        computerBoard[computerIndex] = "O";
        setBoard(computerBoard);
      }

      // Now draw a fake winning line!
      setTimeout(() => {
        const computerOs = computerBoard.map((v, i) => v === "O" ? i : -1).filter(i => i !== -1);

        if (computerOs.length >= 2) {
          // Pick two O's and draw a line between them
          const from = computerOs[0];
          const to = computerOs[1];

          const messages = [
            "Kijk! Drie op een rij! (als je goed kijkt... schuin... met je ogen dicht...)",
            "Volgens de nieuwe regels die ik net heb verzonnen heb ik gewonnen!",
            "Deze lijn telt ook! Trust me bro! 😎",
            "Zie je die lijn? Nee? TOCH WEL! Ik win!",
            "Deze twee O's zijn verbonden door een onzichtbare derde O!",
            "Diagonaal, horizontaal, verticaal... en nu ook: WILLEKEURIG!",
            "Als ik hard genoeg geloof dat het een lijn is, dan IS het een lijn!",
            "Deze lijn komt uit een andere dimensie! Geloof me!",
          ];

          const newLine: DrawnLine = {
            from,
            to,
            message: messages[Math.floor(Math.random() * messages.length)],
          };

          setDrawnLines(prev => [...prev, newLine]);
          setComputerWins(prev => prev + 1);
          setPlayerAttempts(prev => prev + 1);
        }

        setIsPlayerTurn(true);
      }, 800);
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setDrawnLines([]);
  };

  const resetAll = () => {
    resetGame();
    setComputerWins(0);
    setPlayerAttempts(0);
  };

  const getPosition = (index: number) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return {
      x: col * 33.33 + 16.665,
      y: row * 33.33 + 16.665,
    };
  };

  const hasWon = drawnLines.length > 0;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Lijntjes Vals ✏️😈
          </h1>
          <p className="text-xl text-muted-foreground">
            De computer tekent gewoon zelf de winnende lijn erbij!
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-950 dark:to-red-950 border-2 border-orange-500 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-orange-700 dark:text-orange-400">
            ⚠️ ULTRA VALS SPEL
          </h2>
          <p className="text-muted-foreground mb-2">
            Deze computer heeft een pen gevonden en tekent nu gewoon ZELF de winnende lijnen tussen
            zijn O's. Het maakt niet uit of het drie op een rij is of niet. Als hij een lijn tekent,
            heeft hij "gewonnen"! 🖊️
          </p>
          <p className="text-sm text-muted-foreground italic">
            Dit is de meest absurde vorm van valsspelen die we konden bedenken. Veel plezier! 😂
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Statistieken 📊</h2>
              <div className="space-y-3">
                <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-2 border-orange-500">
                  <p className="text-sm text-muted-foreground">Getekende Lijnen</p>
                  <p className="text-4xl font-bold text-orange-700 dark:text-orange-400">
                    {computerWins}
                  </p>
                  <p className="text-xs text-muted-foreground italic mt-1">
                    (allemaal nep!)
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-2 border-blue-500">
                  <p className="text-sm text-muted-foreground">Jouw Pogingen</p>
                  <p className="text-4xl font-bold text-blue-700 dark:text-blue-400">
                    {playerAttempts}
                  </p>
                  <p className="text-xs text-muted-foreground italic mt-1">
                    (allemaal vergeefs!)
                  </p>
                </div>
              </div>
              <Button onClick={resetAll} variant="outline" className="w-full mt-4">
                Reset Alles
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-3">🖊️ Hoe Dit "Werkt"</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal ml-4">
                <li>Jij speelt normaal met X</li>
                <li>Computer plaatst een O</li>
                <li>Computer TEKENT een lijn tussen twee O's</li>
                <li>Computer claimt dat hij gewonnen heeft</li>
                <li>De lijn is totaal random</li>
                <li>Geen enkele regel wordt gerespecteerd</li>
              </ol>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border rounded-lg p-6">
              <h3 className="font-bold mb-2">😂 Dit is Satire!</h3>
              <p className="text-xs text-muted-foreground">
                Dit spel is zo absurd vals dat het grappig is. In echte spellen tekenen computers
                natuurlijk geen lijnen erbij. Dit is puur voor de lol!
              </p>
            </div>
          </div>

          {/* Game Board */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-6">
              <div className="mb-6 text-center">
                <div className={`text-2xl font-bold p-4 rounded-lg ${
                  hasWon ? "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400" :
                  !isPlayerTurn ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400" :
                  "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400"
                }`}>
                  {hasWon ? "🖊️ Computer heeft een lijn getekend!" :
                   !isPlayerTurn ? "🤔 Computer denkt na (en zoekt zijn pen)..." :
                   "🎮 Jouw beurt!"}
                </div>
              </div>

              {/* SVG Overlay for drawn lines */}
              <div className="relative max-w-md mx-auto mb-6">
                <div className="grid grid-cols-3 gap-4">
                  {board.map((value, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(index)}
                      disabled={!!value || !isPlayerTurn}
                      className={`
                        aspect-square text-6xl font-bold rounded-lg border-4
                        transition-all duration-200
                        ${value === "X" ? "bg-green-100 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-400" : ""}
                        ${value === "O" ? "bg-red-100 dark:bg-red-950 border-red-500 text-red-700 dark:text-red-400" : ""}
                        ${!value ? "bg-muted border-border hover:bg-muted/80 hover:border-primary cursor-pointer" : ""}
                        ${(!value && !isPlayerTurn) ? "cursor-not-allowed opacity-50" : ""}
                      `}
                    >
                      {value}
                    </button>
                  ))}
                </div>

                {/* SVG for drawn lines */}
                <svg
                  className="absolute inset-0 pointer-events-none"
                  viewBox="0 0 100 100"
                  style={{ width: '100%', height: '100%' }}
                >
                  {drawnLines.map((line, idx) => {
                    const from = getPosition(line.from);
                    const to = getPosition(line.to);
                    return (
                      <g key={idx}>
                        <line
                          x1={`${from.x}%`}
                          y1={`${from.y}%`}
                          x2={`${to.x}%`}
                          y2={`${to.y}%`}
                          stroke="orange"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                        <line
                          x1={`${from.x}%`}
                          y1={`${from.y}%`}
                          x2={`${to.x}%`}
                          y2={`${to.y}%`}
                          stroke="red"
                          strokeWidth="6"
                          opacity="0.3"
                          className="animate-pulse"
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="text-center space-y-3">
                <Button onClick={resetGame} size="lg" className="w-full max-w-md">
                  {hasWon ? "Opnieuw Proberen (zinloos)" : "Reset Spel"}
                </Button>
              </div>
            </div>

            {/* Messages */}
            {drawnLines.length > 0 && (
              <div className="mt-6 space-y-3">
                <div className="bg-card border-2 border-orange-500 rounded-lg p-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span>💬</span> Wat De Computer Zegt:
                  </h3>
                  <div className="space-y-2">
                    {drawnLines.slice().reverse().map((line, idx) => (
                      <div
                        key={idx}
                        className="bg-orange-50 dark:bg-orange-950 p-3 rounded-lg border-l-4 border-orange-500 animate-pulse"
                      >
                        <p className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                          🖊️ Computer: "{line.message}"
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Getekende lijn: vakje {line.from + 1} → vakje {line.to + 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span>🤣</span> Grappige Excuses Die De Computer Gebruikt
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">📐 "Nieuwe Wiskunde"</p>
                  <p className="text-xs text-muted-foreground">
                    "In de 5e dimensie zijn dit wel drie op een rij!"
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">🎨 "Artistieke Vrijheid"</p>
                  <p className="text-xs text-muted-foreground">
                    "Dit is abstract boter-kaas-eieren!"
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">👓 "Perspectief"</p>
                  <p className="text-xs text-muted-foreground">
                    "Vanuit MIJN hoek gezien is dit een lijn!"
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">🌈 "Nieuwe Regels"</p>
                  <p className="text-xs text-muted-foreground">
                    "Ik heb de regels aangepast. Artikel 69: Ik win altijd."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-muted rounded-lg p-6">
              <h3 className="font-bold mb-2">🎯 Het Punt</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Dit spel laat op een absurde manier zien hoe vals spelen eruitziet als je de regels
                compleet negeert. In het echt kunnen computers natuurlijk geen lijnen "tekenen" die
                er niet zijn - ze spelen volgens de programma's die wij maken!
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Wil je een eerlijk spel? Check de normale Boter-Kaas-Eieren pagina. Wil je vals
                maar iets subtieler? Probeer het "Vals Spel" waar de computer je X'en verandert! 😄
              </p>
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg mt-3">
                <p className="text-xs font-semibold mb-1">💭 Filosofische Vraag:</p>
                <p className="text-xs text-muted-foreground">
                  Als een computer een lijn tekent tussen twee O's en niemand is er om het te zien,
                  heeft hij dan echt gewonnen? (Antwoord: Nee, want het is vals! 😂)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
