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

export default function Navigation() {
  const location = useLocation();

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
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </div>
  );
}
