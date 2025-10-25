import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import type { Route } from "./+types/admin";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { useCart, type Candy, type CandyInput } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin - Snoepjes Beheren" },
    { name: "description", content: "Beheer alle snoepjes in de winkel" },
  ];
}

interface CandyFormData {
  readonly name: string;
  readonly price: string;
  readonly description: string;
  readonly emoji: string;
  readonly category: string;
}

const emptyForm: CandyFormData = {
  name: "",
  price: "",
  description: "",
  emoji: "",
  category: "",
};

export default function Admin() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { candies, addCandy, updateCandy, deleteCandy } = useCart();

  // Protect admin route
  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
    }
  }, [isAdmin, navigate]);

  // Don't render anything while redirecting
  if (!isAdmin) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto p-6 max-w-2xl">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Geen toegang</h1>
            <p className="text-muted-foreground mb-8">
              Je moet ingelogd zijn als admin om deze pagina te bekijken.
            </p>
            <Button asChild size="lg">
              <Link to="/login">Naar login</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<CandyFormData>(emptyForm);

  const handleInputChange = (field: keyof CandyFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const startAdd = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setIsAdding(true);
  };

  const startEdit = (candy: Candy) => {
    setFormData({
      name: candy.name,
      price: candy.price.toString(),
      description: candy.description,
      emoji: candy.emoji,
      category: candy.category,
    });
    setEditingId(candy.id);
    setIsAdding(false);
  };

  const cancelEdit = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setIsAdding(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const candyInput: CandyInput = {
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      emoji: formData.emoji,
      category: formData.category,
    };

    if (isAdding) {
      addCandy(candyInput);
    } else if (editingId !== null) {
      updateCandy(editingId, candyInput);
    }

    cancelEdit();
  };

  const handleDelete = (id: number) => {
    if (confirm("Weet je zeker dat je dit snoepje wilt verwijderen?")) {
      deleteCandy(id);
      if (editingId === id) {
        cancelEdit();
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Admin - Snoepjes Beheren</h1>
          <p className="text-muted-foreground">Voeg snoepjes toe, bewerk of verwijder ze</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulier */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4">
                {isAdding ? "Nieuw Snoepje" : editingId !== null ? "Snoepje Bewerken" : "Snoepje Toevoegen"}
              </h2>

              {!isAdding && editingId === null ? (
                <Button onClick={startAdd} className="w-full" size="lg">
                  + Nieuw Snoepje Toevoegen
                </Button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="Bijv. Chocolade Repen"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Emoji *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emoji}
                      onChange={(e) => handleInputChange("emoji", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background text-4xl text-center"
                      placeholder="🍫"
                      maxLength={2}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Prijs (€) *
                    </label>
                    <input
                      type="number"
                      required
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="2.99"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Categorie *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background"
                      placeholder="Bijv. Chocolade"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Beschrijving *
                    </label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md bg-background resize-none"
                      placeholder="Beschrijf het snoepje..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      {isAdding ? "Toevoegen" : "Opslaan"}
                    </Button>
                    <Button type="button" variant="outline" onClick={cancelEdit} className="flex-1">
                      Annuleren
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Lijst met snoepjes */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Alle Snoepjes ({candies.length})</h2>
              </div>

              <div className="space-y-3">
                {candies.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Geen snoepjes gevonden. Voeg er een toe!</p>
                  </div>
                ) : (
                  candies.map((candy) => (
                    <div
                      key={candy.id}
                      className={`border rounded-lg p-4 transition-all ${
                        editingId === candy.id ? "ring-2 ring-primary bg-primary/5" : "hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{candy.emoji}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-lg">{candy.name}</h3>
                            <span className="text-xl font-bold text-primary">€{candy.price.toFixed(2)}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{candy.category}</p>
                          <p className="text-sm text-muted-foreground mb-3">{candy.description}</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant={editingId === candy.id ? "default" : "outline"}
                              onClick={() => startEdit(candy)}
                            >
                              {editingId === candy.id ? "Bezig met bewerken..." : "Bewerken"}
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(candy.id)}
                            >
                              Verwijderen
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
