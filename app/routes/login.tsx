import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/login";
import Navigation from "../components/Navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Admin" },
    { name: "description", content: "Log in als administrator" },
  ];
}

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already logged in as admin
  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate("/admin");
    }
  }, [isAuthenticated, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(username, password);

    if (success) {
      navigate("/admin");
    } else {
      setError("Ongeldige gebruikersnaam of wachtwoord");
      setPassword("");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-md">
        <div className="bg-card border rounded-lg p-8 mt-12">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Log in om de admin pagina te openen</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Gebruikersnaam
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="Voer gebruikersnaam in"
                autoComplete="username"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Wachtwoord
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="Voer wachtwoord in"
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Bezig met inloggen..." : "Inloggen"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm font-semibold mb-2">Demo Credentials:</p>
            <p className="text-xs text-muted-foreground mb-1">
              <strong>Gebruikersnaam:</strong> admin
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Wachtwoord:</strong> admin123
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
