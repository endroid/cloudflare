import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Navigation() {
  const location = useLocation();
  const { isAuthenticated, isAdmin, user, logout } = useAuth();

  return (
    <div className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/"}>
                <Link
                  to="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/" && "font-bold"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/about"}>
                <Link
                  to="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/about" && "font-bold"
                  )}
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/disclaimer"}>
                <Link
                  to="/disclaimer"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/disclaimer" && "font-bold"
                  )}
                >
                  Disclaimer
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/snoep"}>
                <Link
                  to="/snoep"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/snoep" && "font-bold"
                  )}
                >
                  🍬 Snoep
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/eenhoorn-drollen"}>
                <Link
                  to="/eenhoorn-drollen"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/eenhoorn-drollen" && "font-bold"
                  )}
                >
                  🦄 Recept
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/waarom-drollen"}>
                <Link
                  to="/waarom-drollen"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/waarom-drollen" && "font-bold"
                  )}
                >
                  🧬 Biologie
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/programmeren"}>
                <Link
                  to="/programmeren"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/programmeren" && "font-bold"
                  )}
                >
                  💻 Code
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/boter-kaas-eieren"}>
                <Link
                  to="/boter-kaas-eieren"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/boter-kaas-eieren" && "font-bold"
                  )}
                >
                  🎮 Spel
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild active={location.pathname === "/vals-spel"}>
                <Link
                  to="/vals-spel"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/vals-spel" && "font-bold"
                  )}
                >
                  😈 Vals
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {isAdmin && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild active={location.pathname === "/admin"}>
                  <Link
                    to="/admin"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      location.pathname === "/admin" && "font-bold"
                    )}
                  >
                    Admin
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {user?.username}
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                Uitloggen
              </Button>
            </div>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Inloggen</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
