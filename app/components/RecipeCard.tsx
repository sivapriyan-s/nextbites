import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-art" aria-hidden="true">
        <span>{recipe.emoji}</span>
        <span className="recipe-card-cuisine">{recipe.cuisine}</span>
      </div>
      <div className="recipe-card-content">
        <div className="recipe-card-meta">
          <span>⏱ {recipe.minutes} min</span>
          <span className={`difficulty difficulty-${recipe.difficulty.toLowerCase()}`}>
            {recipe.difficulty}
          </span>
        </div>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    </article>
  );
}
