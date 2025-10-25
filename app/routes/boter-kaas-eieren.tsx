import { useState } from "react";
import type { Route } from "./+types/boter-kaas-eieren";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boter Kaas en Eieren - Speel het Spel!" },
    { name: "description", content: "Speel boter kaas en eieren tegen de computer!" },
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

const getComputerMove = (squares: Board): number => {
  // Check if computer can win
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      const testSquares = [...squares];
      testSquares[i] = "O";
      if (calculateWinner(testSquares) === "O") {
        return i;
      }
    }
  }

  // Block player from winning
  for (let i = 0; i < 9; i++) {
    if (squares[i] === null) {
      const testSquares = [...squares];
      testSquares[i] = "X";
      if (calculateWinner(testSquares) === "X") {
        return i;
      }
    }
  }

  // Take center if available
  if (squares[4] === null) {
    return 4;
  }

  // Take a corner
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(i => squares[i] === null);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Take any available space
  const available = squares.map((sq, idx) => sq === null ? idx : -1).filter(idx => idx !== -1);
  return available[Math.floor(Math.random() * available.length)];
};

export default function BoterKaasEieren() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const winner = calculateWinner(board);
  const isDraw = !winner && isBoardFull(board);

  const handleClick = (index: number) => {
    if (board[index] || winner || isDraw || !isPlayerTurn) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner === "X") {
      setPlayerWins(prev => prev + 1);
      return;
    }

    if (isBoardFull(newBoard)) {
      setDraws(prev => prev + 1);
      return;
    }

    setIsPlayerTurn(false);

    // Computer's turn
    setTimeout(() => {
      const computerIndex = getComputerMove(newBoard);
      const computerBoard = [...newBoard];
      computerBoard[computerIndex] = "O";
      setBoard(computerBoard);

      const computerWinner = calculateWinner(computerBoard);
      if (computerWinner === "O") {
        setComputerWins(prev => prev + 1);
      } else if (isBoardFull(computerBoard)) {
        setDraws(prev => prev + 1);
      }

      setIsPlayerTurn(true);
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  const resetScore = () => {
    resetGame();
    setPlayerWins(0);
    setComputerWins(0);
    setDraws(0);
  };

  const getStatusMessage = () => {
    if (winner === "X") return "🎉 Je hebt gewonnen!";
    if (winner === "O") return "💻 Computer wint!";
    if (isDraw) return "🤝 Gelijkspel!";
    if (!isPlayerTurn) return "💭 Computer denkt na...";
    return "🎮 Jouw beurt (X)";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Boter Kaas en Eieren ⭕❌
          </h1>
          <p className="text-xl text-muted-foreground">
            Speel tegen de computer en probeer te winnen!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Score Board */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Scorebord 🏆</h2>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-2 border-green-500">
                  <p className="text-sm text-muted-foreground">Jij (X)</p>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">{playerWins}</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-2 border-red-500">
                  <p className="text-sm text-muted-foreground">Computer (O)</p>
                  <p className="text-3xl font-bold text-red-700 dark:text-red-400">{computerWins}</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-2 border-yellow-500">
                  <p className="text-sm text-muted-foreground">Gelijkspel</p>
                  <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">{draws}</p>
                </div>
              </div>
              <Button onClick={resetScore} variant="outline" className="w-full mt-4">
                Reset Score
              </Button>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-bold mb-2">📜 Spelregels</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Jij bent X, computer is O</li>
                <li>• Zet 3 op een rij (horizontaal, verticaal of diagonaal)</li>
                <li>• Eerste die 3 op een rij heeft, wint!</li>
                <li>• Geen winnaar? Dan is het gelijkspel</li>
              </ul>
            </div>
          </div>

          {/* Game Board */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-6">
              <div className="mb-6 text-center">
                <div className={`text-2xl font-bold p-4 rounded-lg ${
                  winner === "X" ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400" :
                  winner === "O" ? "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400" :
                  isDraw ? "bg-yellow-100 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400" :
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
                    disabled={!!value || !!winner || isDraw || !isPlayerTurn}
                    className={`
                      aspect-square text-6xl font-bold rounded-lg border-4
                      transition-all duration-200
                      ${value === "X" ? "bg-green-100 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-400" : ""}
                      ${value === "O" ? "bg-red-100 dark:bg-red-950 border-red-500 text-red-700 dark:text-red-400" : ""}
                      ${!value ? "bg-muted border-border hover:bg-muted/80 hover:border-primary cursor-pointer" : ""}
                      ${(!value && (winner || isDraw || !isPlayerTurn)) ? "cursor-not-allowed opacity-50" : ""}
                    `}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <Button onClick={resetGame} size="lg" className="w-full max-w-md">
                  {winner || isDraw ? "Nieuw Spel" : "Reset Spel"}
                </Button>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border rounded-lg p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <span>💡</span> Tips om te Winnen
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">🎯 Pak het midden</p>
                  <p className="text-xs text-muted-foreground">
                    Het middelste vakje is het belangrijkst - het maakt deel uit van 4 winnende lijnen!
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">🛡️ Blokkeer de tegenstander</p>
                  <p className="text-xs text-muted-foreground">
                    Als de computer bijna 3 op een rij heeft, blokkeer dan snel!
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">📐 Hoeken zijn sterk</p>
                  <p className="text-xs text-muted-foreground">
                    Hoeken maken deel uit van 3 winnende lijnen (horizontaal, verticaal, diagonaal).
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <p className="font-semibold mb-1">🎨 Maak twee dreigingen</p>
                  <p className="text-xs text-muted-foreground">
                    Probeer een situatie te maken waar je op 2 plekken kunt winnen!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-muted rounded-lg p-6">
              <h3 className="font-bold mb-2">🤖 Over de Computer AI</h3>
              <p className="text-sm text-muted-foreground mb-2">
                De computer speelt slim! Hij probeert eerst te winnen, dan jou te blokkeren, en anders
                strategisch te spelen door het midden of hoeken te pakken.
              </p>
              <p className="text-sm text-muted-foreground">
                Fun fact: Bij perfect spel eindigt boter-kaas-eieren altijd in gelijkspel! Kun jij
                de computer verslaan? 🎯
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
