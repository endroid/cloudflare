import type { Route } from "./+types/about";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router App" },
    { name: "description", content: "About page" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About</h1>
        <p className="text-muted-foreground">This is the about page.</p>
      </main>
    </div>
  );
}
