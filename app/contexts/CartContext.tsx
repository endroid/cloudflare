import { createContext, useContext, useState, type ReactNode } from "react";

export interface Candy {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly emoji: string;
  readonly category: string;
}

export type CandyInput = Omit<Candy, "id">;

const initialCandies: readonly Candy[] = [
  {
    id: 1,
    name: "Regenboog Lolly's",
    price: 2.99,
    description: "Kleurrijke lolly's in alle kleuren van de regenboog",
    emoji: "🍭",
    category: "Lolly's",
  },
  {
    id: 2,
    name: "Chocolade Repen",
    price: 1.99,
    description: "Romige melkchocolade repen",
    emoji: "🍫",
    category: "Chocolade",
  },
  {
    id: 3,
    name: "Zure Worms",
    price: 3.49,
    description: "Extra zure wormpjes voor de durfals",
    emoji: "🐛",
    category: "Zuur",
  },
  {
    id: 4,
    name: "Kauwgom Ballen",
    price: 2.49,
    description: "Verschillende smaken kauwgom",
    emoji: "🔵",
    category: "Kauwgom",
  },
  {
    id: 5,
    name: "Winegums",
    price: 2.79,
    description: "Klassieke winegums in fruitsmaak",
    emoji: "🟣",
    category: "Gummies",
  },
  {
    id: 6,
    name: "Drop Munten",
    price: 2.29,
    description: "Zoete en zoute dropmunten",
    emoji: "⚫",
    category: "Drop",
  },
  {
    id: 7,
    name: "Toffees",
    price: 3.29,
    description: "Zachte en romige toffees",
    emoji: "🟤",
    category: "Toffee",
  },
  {
    id: 8,
    name: "Gummy Bears",
    price: 2.99,
    description: "Kleurrijke gummy beertjes",
    emoji: "🐻",
    category: "Gummies",
  },
  {
    id: 9,
    name: "Marshmallows",
    price: 2.49,
    description: "Zachte en zoete marshmallows",
    emoji: "☁️",
    category: "Marshmallow",
  },
  {
    id: 10,
    name: "Pepermunt",
    price: 1.79,
    description: "Frisse pepermuntjes",
    emoji: "🌿",
    category: "Munt",
  },
  {
    id: 11,
    name: "Cola Flesjes",
    price: 2.89,
    description: "Gummy snoepjes in de vorm van colaflesjes",
    emoji: "🥤",
    category: "Gummies",
  },
  {
    id: 12,
    name: "Aardbei Laces",
    price: 2.59,
    description: "Lange aardbeienveters",
    emoji: "🍓",
    category: "Veters",
  },
] as const;

interface CartContextType {
  readonly candies: readonly Candy[];
  readonly cart: Record<number, number>;
  readonly addToCart: (candyId: number) => void;
  readonly removeFromCart: (candyId: number) => void;
  readonly clearCart: () => void;
  readonly getTotalPrice: () => number;
  readonly getTotalItems: () => number;
  readonly getCartItems: () => Array<{ candy: Candy; quantity: number }>;
  readonly addCandy: (candy: CandyInput) => void;
  readonly updateCandy: (id: number, candy: CandyInput) => void;
  readonly deleteCandy: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { readonly children: ReactNode }) {
  const [candies, setCandies] = useState<Candy[]>([...initialCandies]);
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (candyId: number) => {
    setCart(prev => ({
      ...prev,
      [candyId]: (prev[candyId] || 0) + 1,
    }));
  };

  const removeFromCart = (candyId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[candyId] > 1) {
        newCart[candyId]--;
      } else {
        delete newCart[candyId];
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getTotalPrice = (): number => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const candy = candies.find(c => c.id === parseInt(id));
      return total + (candy?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = (): number => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getCartItems = () => {
    return Object.entries(cart).map(([id, quantity]) => {
      const candy = candies.find(c => c.id === parseInt(id));
      return { candy: candy!, quantity };
    }).filter(item => item.candy !== undefined);
  };

  const addCandy = (candyInput: CandyInput) => {
    const newId = Math.max(...candies.map(c => c.id), 0) + 1;
    const newCandy: Candy = { ...candyInput, id: newId };
    setCandies(prev => [...prev, newCandy]);
  };

  const updateCandy = (id: number, candyInput: CandyInput) => {
    setCandies(prev => prev.map(candy =>
      candy.id === id ? { ...candyInput, id } : candy
    ));
  };

  const deleteCandy = (id: number) => {
    setCandies(prev => prev.filter(candy => candy.id !== id));
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        candies,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getTotalItems,
        getCartItems,
        addCandy,
        updateCandy,
        deleteCandy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
