import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <section className="state-card">
        <p className="eyebrow">404 · Recipe not found</p>
        <h1>This bite isn&apos;t on the menu.</h1>
        <p className="state-description">
          The recipe may have moved, or that address may be missing an ingredient.
        </p>
        <Link className="primary-button" href="/">
          Browse all recipes <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
