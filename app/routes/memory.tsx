import { useState, useEffect } from "react";
import type { Route } from "./+types/memory";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "🌀 Psychedelic Memory Trip 🌈" },
    { name: "description", content: "Enter a trippy dimension of consciousness and test your mind!" },
  ];
}

type Card = {
  readonly id: number;
  readonly emoji: string;
  readonly isFlipped: boolean;
  readonly isMatched: boolean;
};

const EMOJIS = ["🌈", "🌀", "✨", "🔮", "👁️", "🦋"];

const createDeck = (): Card[] => {
  const pairs = EMOJIS.flatMap((emoji, index) => [
    { id: index * 2, emoji, isFlipped: false, isMatched: false },
    { id: index * 2 + 1, emoji, isFlipped: false, isMatched: false },
  ]);

  // Shuffle using Fisher-Yates algorithm
  const shuffled = [...pairs];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const getBestScore = (): number | null => {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem("memoryBestScore");
  return saved ? parseInt(saved, 10) : null;
};

const saveBestScore = (score: number): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem("memoryBestScore", score.toString());
};

export default function Memory() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    setCards(createDeck());
    setBestScore(getBestScore());
  }, []);

  const matchedPairs = cards.filter(card => card.isMatched).length / 2;
  const isGameWon = matchedPairs === EMOJIS.length;

  const handleCardClick = (clickedCard: Card) => {
    if (
      isChecking ||
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      flippedCards.length >= 2
    ) {
      return;
    }

    const newCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, clickedCard.id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      setIsChecking(true);

      const [firstId, secondId] = newFlippedCards;
      const firstCard = newCards.find(c => c.id === firstId);
      const secondCard = newCards.find(c => c.id === secondId);

      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        // Match found!
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (isGameWon && moves > 0) {
      if (bestScore === null || moves < bestScore) {
        saveBestScore(moves);
        setBestScore(moves);
      }
    }
  }, [isGameWon, moves, bestScore]);

  const resetGame = () => {
    setCards(createDeck());
    setFlippedCards([]);
    setMoves(0);
    setIsChecking(false);
  };

  const getStatusMessage = () => {
    if (isGameWon) {
      if (bestScore === moves) {
        return "🌟 COSMIC RECORD SHATTERED! 🌟";
      }
      return `✨ CONSCIOUSNESS EXPANDED IN ${moves} MOVES! ✨`;
    }
    if (flippedCards.length === 0) {
      return "👁️ OPEN YOUR THIRD EYE... CLICK TO TRANSCEND 👁️";
    }
    if (flippedCards.length === 1) {
      return "🌀 SEEK THE TWIN FLAME IN THE VOID 🌀";
    }
    return "🌈 REALITY IS MELTING... 🌈";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 dark:from-indigo-950 dark:via-purple-900 dark:to-pink-950 animate-gradient-x relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <main className="container mx-auto p-6 max-w-5xl">
          <div className="text-center mb-8 animate-bounce-slow">
            <h1 className="text-6xl font-black tracking-wider mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(255,0,255,0.8)]">
              🌀 PSYCHEDELIC MEMORY TRIP 🌈
            </h1>
            <p className="text-2xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] animate-pulse">
              ✨ Expand Your Mind Through The Rainbow Dimension ✨
            </p>
          </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-black/60 backdrop-blur-xl border-4 border-cyan-400 rounded-3xl p-6 shadow-[0_0_50px_rgba(0,255,255,0.6)] animate-pulse-glow">
              <h2 className="text-3xl font-black mb-4 text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text animate-pulse">
                COSMIC STATS 🌟
              </h2>
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-800 p-5 rounded-2xl border-4 border-cyan-300 transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,255,0.5)] animate-float">
                  <p className="text-xs text-cyan-100 font-bold tracking-widest uppercase">Dimension Shifts</p>
                  <p className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] animate-bounce">{moves}</p>
                </div>
                <div className="bg-gradient-to-br from-pink-600 to-purple-800 p-5 rounded-2xl border-4 border-pink-300 transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,0,255,0.5)] animate-float delay-200">
                  <p className="text-xs text-pink-100 font-bold tracking-widest uppercase">Twin Flames United</p>
                  <p className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] animate-bounce">
                    {matchedPairs}/{EMOJIS.length}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-700 p-5 rounded-2xl border-4 border-yellow-300 transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,0,0.5)] animate-float delay-400">
                  <p className="text-xs text-yellow-100 font-bold tracking-widest uppercase">Enlightenment Record</p>
                  <p className="text-5xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] animate-bounce">
                    {bestScore ?? "∞"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/60 backdrop-blur-xl border-4 border-purple-500 rounded-3xl p-6 shadow-[0_0_50px_rgba(128,0,255,0.6)] transform hover:rotate-1 transition-all">
              <h3 className="font-black text-xl mb-3 text-transparent bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text">
                🧬 RULES OF REALITY 🧬
              </h3>
              <ul className="text-sm text-white/90 space-y-2 font-semibold">
                <li className="hover:text-cyan-300 transition-colors">⚡ Touch the void to reveal truth</li>
                <li className="hover:text-pink-300 transition-colors">🌀 Seek the cosmic twin</li>
                <li className="hover:text-yellow-300 transition-colors">✨ Unite all 6 dimensions!</li>
                <li className="hover:text-green-300 transition-colors">👁️ Less shifts = Higher consciousness</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-900/80 to-purple-900/80 backdrop-blur-xl border-4 border-pink-400 rounded-3xl p-6 shadow-[0_0_50px_rgba(255,0,255,0.6)] animate-wiggle">
              <h3 className="font-black text-xl mb-3 text-transparent bg-gradient-to-r from-yellow-200 to-orange-300 bg-clip-text">
                💫 ASCENSION GUIDE 💫
              </h3>
              <ul className="text-sm text-white/90 space-y-2 font-semibold">
                <li className="hover:text-yellow-300 transition-colors">🌈 Remember all patterns in the matrix</li>
                <li className="hover:text-cyan-300 transition-colors">🔮 Start from the outer realms</li>
                <li className="hover:text-pink-300 transition-colors">🦋 Focus chakras on one sector</li>
                <li className="hover:text-green-300 transition-colors">✨ Transcendence through repetition!</li>
              </ul>
            </div>
          </div>

          {/* Game Board */}
          <div className="lg:col-span-2">
            <div className="bg-black/70 backdrop-blur-2xl border-4 border-purple-400 rounded-3xl p-8 shadow-[0_0_80px_rgba(128,0,255,0.8)]">
              <div className="mb-8">
                <div
                  className={`text-2xl font-black p-6 rounded-2xl text-center border-4 transform hover:scale-105 transition-all ${
                    isGameWon
                      ? "bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 border-green-300 text-white animate-bounce shadow-[0_0_60px_rgba(0,255,0,0.9)]"
                      : "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 border-pink-300 text-white animate-pulse shadow-[0_0_60px_rgba(255,0,255,0.9)]"
                  }`}
                >
                  {getStatusMessage()}
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
                {cards.map((card, index) => (
                  <button
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    disabled={card.isMatched || card.isFlipped || isChecking}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                    className={`
                      aspect-square text-6xl md:text-7xl font-black rounded-3xl border-4
                      transition-all duration-500 transform
                      ${
                        card.isMatched
                          ? "bg-gradient-to-br from-green-400 via-emerald-300 to-teal-400 border-green-200 rotate-[360deg] scale-110 shadow-[0_0_50px_rgba(0,255,0,0.8)] animate-spin-slow"
                          : card.isFlipped
                          ? "bg-gradient-to-br from-white via-yellow-100 to-pink-100 border-yellow-300 scale-110 shadow-[0_0_40px_rgba(255,255,0,0.8)] rotate-[10deg]"
                          : "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 border-purple-300 hover:scale-110 hover:rotate-[5deg] cursor-pointer shadow-[0_0_30px_rgba(255,0,255,0.6)] animate-rainbow-border"
                      }
                      ${
                        !card.isFlipped && !card.isMatched
                          ? "hover:shadow-[0_0_60px_rgba(255,0,255,1)] hover:border-cyan-300"
                          : ""
                      }
                      disabled:cursor-not-allowed flex items-center justify-center
                      animate-float
                    `}
                  >
                    {card.isFlipped || card.isMatched ? (
                      <span className="animate-in zoom-in duration-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                        {card.emoji}
                      </span>
                    ) : (
                      <span className="text-white text-5xl drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">
                        👁️
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <Button
                  onClick={resetGame}
                  size="lg"
                  className="w-full max-w-md bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 text-white font-black text-xl py-8 rounded-2xl border-4 border-white shadow-[0_0_40px_rgba(255,0,255,0.8)] hover:shadow-[0_0_60px_rgba(0,255,255,1)] transform hover:scale-110 transition-all duration-300 animate-pulse"
                >
                  {isGameWon ? "🌈 ENTER NEW DIMENSION 🌈" : "🔮 RESET REALITY 🔮"}
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-indigo-900/80 via-purple-800/80 to-pink-900/80 backdrop-blur-xl border-4 border-cyan-400 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,255,255,0.7)] transform hover:scale-105 transition-all">
              <h3 className="font-black text-2xl mb-4 flex items-center gap-3 text-transparent bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 bg-clip-text animate-pulse">
                <span className="text-4xl animate-spin-slow">🌀</span>
                THE COSMIC TRUTH
                <span className="text-4xl animate-spin-slow">🌀</span>
              </h3>
              <div className="text-base text-white/95 space-y-3 font-semibold">
                <p className="leading-relaxed hover:text-cyan-300 transition-colors">
                  This ancient ritual transcends the boundaries of consciousness, merging the physical
                  and spiritual realms into a kaleidoscope of infinite possibilities...
                </p>
                <p className="leading-relaxed hover:text-pink-300 transition-colors font-black text-xl text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-cyan-200 bg-clip-text animate-pulse">
                  ✨ Each match opens a portal to higher dimensions! The universe celebrates your awakening! ✨
                </p>
                <p className="leading-relaxed hover:text-yellow-300 transition-colors text-center text-lg">
                  🦋 As above, so below... As within, so without... 🦋
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
