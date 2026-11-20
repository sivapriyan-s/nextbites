import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map(({ id }) => ({ id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="detail-page">
      <div className="detail-shell">
        <Link className="back-link" href="/">
          <span aria-hidden="true">←</span> All recipes
        </Link>
        <header className="detail-hero">
          <div className="detail-art" aria-hidden="true">
            {recipe.emoji}
          </div>
          <div className="detail-intro">
            <span className="detail-cuisine">{recipe.cuisine}</span>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <div className="detail-meta">
              <span>⏱ {recipe.minutes} min</span>
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </header>

        <div className="detail-columns">
          <section className="detail-panel">
            <p className="eyebrow">Get everything ready</p>
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>
          <section className="detail-panel">
            <p className="eyebrow">A few simple steps</p>
            <h2>Let&apos;s make it</h2>
            <ol className="steps-list">
              {recipe.steps.map((step) => (
                <li key={step}>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
