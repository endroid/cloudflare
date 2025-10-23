import type { Route } from "./+types/home";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Home</h1>
        <p className="text-muted-foreground">Welcome to the home page!</p>
        <p className="text-muted-foreground mt-2">Message from Cloudflare: {loaderData.message}</p>
      </main>
    </div>
  );
}
