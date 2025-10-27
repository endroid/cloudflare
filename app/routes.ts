import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("disclaimer", "routes/disclaimer.tsx"),
  route("snoep", "routes/snoep.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("eenhoorn-drollen", "routes/eenhoorn-drollen.tsx"),
  route("waarom-drollen", "routes/waarom-drollen.tsx"),
  route("programmeren", "routes/programmeren.tsx"),
  route("boter-kaas-eieren", "routes/boter-kaas-eieren.tsx"),
  route("vals-spel", "routes/vals-spel.tsx"),
  route("lijntjes-vals", "routes/lijntjes-vals.tsx"),
  route("memory", "routes/memory.tsx"),
  route("login", "routes/login.tsx"),
  route("admin", "routes/admin.tsx"),
] satisfies RouteConfig;
