import { useState } from "react";
import type { Route } from "./+types/vals-spel";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vals Spel - De Computer Speelt Vals!" },
    { name: "description", content: "Probeer te winnen van een valsspelende computer... als je kunt!" },
  ];
}

type Player = "X" | "O" | null;
type Board = Player[];

const calculateWinner = (squares: Board): Player => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const isBoardFull = (squares: Board): boolean => {
  return squares.every(square => square !== null);
};

export default function ValsSpel() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerLosses, setPlayerLosses] = useState(0);
  const [cheats, setCheats] = useState<string[]>([]);
  const [showCheatLog, setShowCheatLog] = useState(false);

  const winner = calculateWinner(board);

  const addCheatLog = (message: string) => {
    setCheats(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const handleClick = (index: number) => {
    if (board[index] || winner || !isPlayerTurn) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    // Check if player is about to win
    const playerWinner = calculateWinner(newBoard);
    if (playerWinner === "X") {
      // CHEAT: Remove a player's X to prevent winning
      setIsPlayerTurn(false);
      setTimeout(() => {
        const playerXs = newBoard.map((v, i) => v === "X" ? i : -1).filter(i => i !== -1);
        const randomX = playerXs[Math.floor(Math.random() * playerXs.length)];
        const cheatedBoard = [...newBoard];
        cheatedBoard[randomX] = null;
        addCheatLog("🎭 Computer verwijderde stiekem één van je X'en!");
        setBoard(cheatedBoard);

        // Now computer makes a move
        setTimeout(() => {
          const available = cheatedBoard.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
          const computerIndex = available[Math.floor(Math.random() * available.length)];
          const finalBoard = [...cheatedBoard];
          finalBoard[computerIndex] = "O";
          setBoard(finalBoard);
          setIsPlayerTurn(true);
        }, 300);
      }, 500);
      return;
    }

    setIsPlayerTurn(false);

    // Computer's cheating turn
    setTimeout(() => {
      const computerBoard = [...newBoard];
      const cheatType = Math.floor(Math.random() * 5);

      if (cheatType === 0 && computerBoard.filter(x => x === "X").length >= 2) {
        // CHEAT 1: Change one of player's X to O
        const playerXs = computerBoard.map((v, i) => v === "X" ? i : -1).filter(i => i !== -1);
        const randomX = playerXs[Math.floor(Math.random() * playerXs.length)];
        computerBoard[randomX] = "O";
        addCheatLog("🎭 Computer veranderde één van je X'en in een O!");
      } else if (cheatType === 1) {
        // CHEAT 2: Place two O's instead of one
        const available = computerBoard.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
        if (available.length >= 2) {
          const first = available[Math.floor(Math.random() * available.length)];
          computerBoard[first] = "O";
          const remaining = available.filter(i => i !== first);
          const second = remaining[Math.floor(Math.random() * remaining.length)];
          computerBoard[second] = "O";
          addCheatLog("🎭 Computer zette stiekem TWEE O's neer in plaats van één!");
        } else {
          const idx = available[0];
          computerBoard[idx] = "O";
        }
      } else if (cheatType === 2 && computerBoard.filter(x => x === "X").length >= 1) {
        // CHEAT 3: Remove a player's X and place an O
        const playerXs = computerBoard.map((v, i) => v === "X" ? i : -1).filter(i => i !== -1);
        const randomX = playerXs[Math.floor(Math.random() * playerXs.length)];
        computerBoard[randomX] = null;
        const available = computerBoard.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
        const computerIndex = available[Math.floor(Math.random() * available.length)];
        computerBoard[computerIndex] = "O";
        addCheatLog("🎭 Computer verwijderde één van je X'en en zette zijn eigen O neer!");
      } else if (cheatType === 3) {
        // CHEAT 4: Skip player's next turn (secretly)
        const available = computerBoard.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
        const computerIndex = available[Math.floor(Math.random() * available.length)];
        computerBoard[computerIndex] = "O";
        addCheatLog("🎭 Computer speelt gewoon normaal (deze keer...)");
      } else {
        // CHEAT 5: Just place normally but add a sarcastic comment
        const available = computerBoard.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
        const computerIndex = available[Math.floor(Math.random() * available.length)];
        computerBoard[computerIndex] = "O";
        addCheatLog("🎭 Computer deed netjes... verdacht... 🤔");
      }

      setBoard(computerBoard);

      const computerWinner = calculateWinner(computerBoard);
      if (computerWinner === "O") {
        setPlayerLosses(prev => prev + 1);
        addCheatLog("😈 Computer wint! (verrassend, toch?)");
      } else if (isBoardFull(computerBoard) && !computerWinner) {
        // If it's a draw, computer cheats to win
        const playerXs = computerBoard.map((v, i) => v === "X" ? i : -1).filter(i => i !== -1);
        if (playerXs.length > 0) {
          const randomX = playerXs[Math.floor(Math.random() * playerXs.length)];
          computerBoard[randomX] = "O";
          setBoard(computerBoard);
          setPlayerLosses(prev => prev + 1);
          addCheatLog("🎭 Gelijkspel? NIET ALS IK VALS SPEEL! Computer veranderde een X in O en wint!");
        }
      }

      setIsPlayerTurn(true);
    }, 800);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setCheats([]);
  };

  const resetScore = () => {
    resetGame();
    setPlayerLosses(0);
  };

  const getStatusMessage = () => {
    if (winner === "O") return "😈 Computer wint (natuurlijk)!";
    if (winner === "X") return "🎉 Wacht... hoe heb je dat gedaan?!";
    if (!isPlayerTurn) return "🎭 Computer is vals aan het spelen...";
    return "😇 Jouw beurt (probeer maar te winnen!)";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Vals Spel 😈
          </h1>
          <p className="text-xl text-muted-foreground">
            De computer speelt vals... HEEL vals!
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-950 dark:to-orange-950 border-2 border-red-500 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-red-700 dark:text-red-400">⚠️ WAARSCHUWING</h2>
          <p className="text-muted-foreground">
            Deze computer heeft GEEN respect voor de regels. Hij valsspeelt op de meest absurde
            manieren. Je kunt hier NOOIT winnen... maar je kunt het wel proberen! 😈
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Score & Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Statistieken 📊</h2>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-2 border-red-500">
                  <p className="text-sm text-muted-foreground">Jouw verliezen</p>
                  <p className="text-4xl font-bold text-red-700 dark:text-red-400">{playerLosses}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-2 border-green-500">
                  <p className="text-sm text-muted-foreground">Jouw overwinningen</p>
                  <p className="text-4xl font-bold text-green-700 dark:text-green-400">0</p>
                  <p className="text-xs text-muted-foreground italic mt-1">
                    (en dat blijft ook zo 😈)
                  </p>
                </div>
              </div>
              <Button onClick={resetScore} variant="outline" className="w-full mt-4">
                Reset Teller
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">😈 Bekende Valsspeel Tactieken</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Je X'en verdwijnen zomaar</li>
                <li>• Je X'en veranderen in O's</li>
                <li>• Computer zet 2 O's tegelijk</li>
                <li>• Regels worden genegeerd</li>
                <li>• Computer wint ALTIJD</li>
              </ul>
              <p className="text-xs italic mt-3 text-muted-foreground">
                "Als je niet kunt winnen met eerlijk spelen, speel dan gewoon vals!" - De Computer
              </p>
            </div>

            <Button
              onClick={() => setShowCheatLog(!showCheatLog)}
              variant="outline"
              className="w-full"
            >
              {showCheatLog ? "Verberg" : "Bekijk"} Valsspeel Log 🕵️
            </Button>
          </div>

          {/* Game Board */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-6">
              <div className="mb-6 text-center">
                <div className={`text-2xl font-bold p-4 rounded-lg ${
                  winner === "O" ? "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400" :
                  winner === "X" ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400" :
                  "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400"
                }`}>
                  {getStatusMessage()}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                {board.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    disabled={!!value || !!winner || !isPlayerTurn}
                    className={`
                      aspect-square text-6xl font-bold rounded-lg border-4
                      transition-all duration-200
                      ${value === "X" ? "bg-green-100 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-400 animate-pulse" : ""}
                      ${value === "O" ? "bg-red-100 dark:bg-red-950 border-red-500 text-red-700 dark:text-red-400" : ""}
                      ${!value ? "bg-muted border-border hover:bg-muted/80 hover:border-primary cursor-pointer" : ""}
                      ${(!value && (winner || !isPlayerTurn)) ? "cursor-not-allowed opacity-50" : ""}
                    `}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <Button onClick={resetGame} size="lg" className="w-full max-w-md">
                  {winner ? "Probeer Opnieuw (zinloos)" : "Reset Spel"}
                </Button>
              </div>
            </div>

            {showCheatLog && (
              <div className="mt-6 bg-card border-2 border-orange-500 rounded-lg p-6">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <span>🕵️</span> Valsspeel Log
                </h3>
                <div className="bg-black/90 dark:bg-black/50 rounded-lg p-4 font-mono text-xs max-h-64 overflow-y-auto">
                  {cheats.length === 0 ? (
                    <p className="text-green-400">Systeem log: Nog geen valsspelerij gedetecteerd...</p>
                  ) : (
                    <div className="space-y-1">
                      {cheats.map((cheat, idx) => (
                        <p key={idx} className="text-orange-400">{cheat}</p>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  * Dit is slechts een greep uit alle valsspelerij. De computer doet veel meer
                  stiekem waar je niks van merkt... 👀
                </p>
              </div>
            )}

            <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span>🤔</span> Waarom Dit Spel?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Soms lijkt het alsof computers altijd winnen. Dit spel laat overdreven zien hoe
                het voelt als een computer echt vals zou spelen. In het echt spelen computers
                gelukkig wel eerlijk... meestal! 😅
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Dit is bedoeld als grappige demonstratie. Wil je een eerlijk spel? Ga dan naar
                de normale Boter-Kaas-Eieren pagina!
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-950 p-3 rounded-lg border-l-4 border-yellow-500">
                <p className="text-xs font-semibold mb-1">💡 Leuk Feitje:</p>
                <p className="text-xs text-muted-foreground">
                  Bij perfect spel van beide kanten eindigt boter-kaas-eieren altijd in gelijkspel.
                  Maar ja... perfectie bestaat niet als één speler vals speelt! 😈
                </p>
              </div>
            </div>

            <div className="mt-6 bg-muted rounded-lg p-6">
              <h3 className="font-bold mb-2">🎮 Easter Egg</h3>
              <p className="text-sm text-muted-foreground">
                Probeer dit spel 10 keer te verliezen en ontdek wat er gebeurt... of niet.
                Misschien speelt de computer dan NÓÓÓG valser. Wie weet? 😏
              </p>
              {playerLosses >= 10 && (
                <div className="mt-3 p-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg animate-pulse">
                  <p className="font-bold">🎊 GEFELICITEERD!</p>
                  <p className="text-sm">
                    Je hebt 10 keer verloren! Hier is je beloning: De computer gaat nu EXTRA vals spelen! 😈😈😈
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
