import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-6 md:p-24">
      <div className="max-w-5xl w-full space-y-8 text-center">
        <h1>
          Bienvenue sur BookMarket
        </h1>
        <p className="text-xl text-muted-foreground">
          Votre bibliothèque en ligne pour découvrir, acheter et gérer vos livres préférés
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/books"
            className="px-6 py-3 text-lg font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Parcourir les livres
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 text-lg font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
          >
            Créer un compte
          </Link>
        </div>
      </div>
    </main>
  );
}