import { Link } from "react-router";
import type { Route } from "./+types/snoep";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Snoepwinkel - Bestel je favoriete snoep!" },
    { name: "description", content: "Bestel heerlijke snoepjes online" },
  ];
}

export default function Snoep() {
  const { candies, cart, addToCart, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">🍬 Snoepwinkel</h1>
          <p className="text-muted-foreground">Bestel je favoriete snoepjes online!</p>
        </div>

        {getTotalItems() > 0 && (
          <div className="mb-6 p-4 bg-primary/10 rounded-lg border-2 border-primary">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Winkelwagen</h3>
                <p className="text-sm text-muted-foreground">
                  {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">€{getTotalPrice().toFixed(2)}</p>
                <Button asChild size="sm" className="mt-2">
                  <Link to="/checkout">Bestellen</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {candies.map((candy) => {
            const quantity = cart[candy.id] || 0;

            return (
              <div
                key={candy.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{candy.emoji}</div>
                  <h3 className="font-bold text-lg mb-1">{candy.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{candy.category}</p>
                  <p className="text-sm text-muted-foreground mb-3">{candy.description}</p>
                  <p className="text-2xl font-bold text-primary">€{candy.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col gap-2">
                  {quantity === 0 ? (
                    <Button
                      onClick={() => addToCart(candy.id)}
                      className="w-full"
                    >
                      Toevoegen aan winkelwagen
                    </Button>
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <Button
                        onClick={() => removeFromCart(candy.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        -
                      </Button>
                      <span className="font-semibold min-w-8 text-center">
                        {quantity}
                      </span>
                      <Button
                        onClick={() => addToCart(candy.id)}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        +
                      </Button>
                    </div>
                  )}
                </div>

                {quantity > 0 && (
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium">
                      Subtotaal: €{(candy.price * quantity).toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {getTotalItems() > 0 && (
          <div className="mt-8 p-6 bg-card border rounded-lg sticky bottom-4">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              <div>
                <h3 className="font-bold text-xl">Totaal</h3>
                <p className="text-sm text-muted-foreground">
                  {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in je winkelwagen
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">€{getTotalPrice().toFixed(2)}</p>
                <Button asChild size="lg" className="mt-2">
                  <Link to="/checkout">Naar bestelpagina</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
