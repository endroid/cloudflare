import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="border-b">
      <NavigationMenu className="mx-auto p-4">
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
    </div>
  );
}
