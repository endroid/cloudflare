import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/checkout";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Winkelmandje - Snoepwinkel" },
    { name: "description", content: "Rond je bestelling af" },
  ];
}

interface FormData {
  readonly name: string;
  readonly email: string;
  readonly address: string;
  readonly city: string;
  readonly zipcode: string;
  readonly phone: string;
  readonly notes: string;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, clearCart, getTotalPrice, getTotalItems, getCartItems } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    phone: "",
    notes: "",
  });

  const cartItems = getCartItems();
  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 25 ? 0 : 4.95;
  const finalTotal = totalPrice + shippingCost;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuleer API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto p-6 max-w-2xl">
          <div className="text-center py-12">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="text-4xl font-bold mb-4">Bedankt voor je bestelling!</h1>
            <p className="text-muted-foreground mb-2">
              Je bestelling is succesvol geplaatst en wordt zo snel mogelijk verzonden.
            </p>
            <p className="text-muted-foreground mb-8">
              Je ontvangt een bevestigingsmail op {formData.email}
            </p>
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h2 className="font-semibold mb-4">Bestelling details</h2>
              <div className="text-left space-y-2 text-sm">
                <p><strong>Naam:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Adres:</strong> {formData.address}</p>
                <p><strong>Stad:</strong> {formData.city} {formData.zipcode}</p>
                <p><strong>Telefoon:</strong> {formData.phone}</p>
                {formData.notes && <p><strong>Opmerkingen:</strong> {formData.notes}</p>}
                <div className="pt-4 border-t mt-4">
                  <p className="text-lg"><strong>Totaalbedrag:</strong> €{finalTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg">
              <Link to="/snoep">Terug naar winkel</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto p-6 max-w-2xl">
          <div className="text-center py-12">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-4xl font-bold mb-4">Je winkelmandje is leeg</h1>
            <p className="text-muted-foreground mb-8">
              Voeg wat lekkere snoepjes toe aan je winkelmandje!
            </p>
            <Button asChild size="lg">
              <Link to="/snoep">Naar de snoepwinkel</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Winkelmandje & Bestellen</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Winkelmandje overzicht */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Je bestelling</h2>

              <div className="space-y-4">
                {cartItems.map(({ candy, quantity }) => (
                  <div key={candy.id} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
                    <div className="text-4xl">{candy.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{candy.name}</h3>
                      <p className="text-sm text-muted-foreground">{candy.description}</p>
                      <p className="text-sm font-medium mt-1">€{candy.price.toFixed(2)} per stuk</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => removeFromCart(candy.id)}
                        variant="outline"
                        size="sm"
                      >
                        -
                      </Button>
                      <span className="font-semibold min-w-8 text-center">{quantity}</span>
                      <Button
                        onClick={() => addToCart(candy.id)}
                        variant="outline"
                        size="sm"
                      >
                        +
                      </Button>
                    </div>
                    <div className="text-right min-w-20">
                      <p className="font-bold">€{(candy.price * quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t space-y-2">
                <div className="flex justify-between text-lg">
                  <span>Subtotaal ({getTotalItems()} items):</span>
                  <span className="font-semibold">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Verzendkosten:</span>
                  <span className="font-semibold">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Gratis!</span>
                    ) : (
                      `€${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                {totalPrice < 25 && (
                  <p className="text-sm text-muted-foreground">
                    Bestel voor €{(25 - totalPrice).toFixed(2)} meer voor gratis verzending!
                  </p>
                )}
                <div className="flex justify-between text-2xl font-bold pt-4 border-t">
                  <span>Totaal:</span>
                  <span>€{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button asChild variant="outline" className="w-full">
              <Link to="/snoep">← Verder winkelen</Link>
            </Button>
          </div>

          {/* Bestelformulier */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4">Bezorggegevens</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="Je volledige naam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="je@email.nl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Adres *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="Straat en huisnummer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zipcode}
                      onChange={(e) => handleInputChange("zipcode", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="1234 AB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Stad *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Amsterdam"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-background"
                    placeholder="06 12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Opmerkingen
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                    placeholder="Speciale wensen of opmerkingen..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Bestelling plaatsen..." : `Bestellen (€${finalTotal.toFixed(2)})`}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Door te bestellen ga je akkoord met onze voorwaarden
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
