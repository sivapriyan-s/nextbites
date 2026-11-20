import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true">✳</span> A little inspiration for your table
          </p>
          <h1>
            Find your
            <br />
            next <span>favorite.</span>
          </h1>
          <p className="hero-description">
            Good food doesn&apos;t have to be complicated. Pick a recipe, gather
            your people, and let&apos;s make something delicious.
          </p>
          <a className="primary-button" href="#recipes">
            Browse recipes <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-circle">
            <span>🥑</span>
            <span>🍅</span>
            <span>🥬</span>
            <span>🍋</span>
            <span className="hero-art-center">🥙</span>
          </div>
          <span className="hero-note">
            fresh ideas
            <br />
            daily ✦
          </span>
        </div>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The good stuff</p>
            <h2>What sounds good?</h2>
          </div>
          <p className="recipe-count">{recipes.length} recipes to get you started</p>
        </div>
        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
