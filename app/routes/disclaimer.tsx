import type { Route } from "./+types/disclaimer";
import Navigation from "../components/Navigation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Disclaimer - React Router App" },
    { name: "description", content: "Disclaimer and legal information" },
  ];
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Disclaimer</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Algemene Informatie</h2>
            <p className="text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
            <p className="text-muted-foreground mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Aansprakelijkheid</h2>
            <p className="text-muted-foreground mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <p className="text-muted-foreground mb-4">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectueel Eigendom</h2>
            <p className="text-muted-foreground mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
              officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Externe Links</h2>
            <p className="text-muted-foreground mb-4">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
            <p className="text-muted-foreground mb-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
              rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
              consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Wijzigingen</h2>
            <p className="text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Laatste update:</strong> Oktober 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
