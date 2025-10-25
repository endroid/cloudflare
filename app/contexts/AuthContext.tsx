import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface User {
  readonly username: string;
  readonly role: "admin" | "user";
}

interface AuthContextType {
  readonly user: User | null;
  readonly isAuthenticated: boolean;
  readonly isAdmin: boolean;
  readonly login: (username: string, password: string) => boolean;
  readonly logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple demo credentials (in production, use proper backend authentication)
const DEMO_CREDENTIALS = {
  username: "admin",
  password: "admin123",
  role: "admin" as const,
};

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("auth_user");
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // Simple demo authentication (replace with real API call in production)
    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      const newUser: User = {
        username: DEMO_CREDENTIALS.username,
        role: DEMO_CREDENTIALS.role,
      };
      setUser(newUser);
      localStorage.setItem("auth_user", JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
