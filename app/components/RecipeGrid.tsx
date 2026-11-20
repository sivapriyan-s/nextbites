"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleRecipes = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine}`.toLowerCase().includes(normalizedQuery),
  );

  return (
    <>
      <label className="search-field">
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          aria-label="Search recipes by name or cuisine"
          placeholder="Search recipes or cuisines..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <p className="recipe-count search-result-count" aria-live="polite">
        {visibleRecipes.length} {visibleRecipes.length === 1 ? "recipe" : "recipes"}
      </p>
      {visibleRecipes.length === 0 ? (
        <p className="empty-results" role="status">
          No recipes match &ldquo;{query}&rdquo;. Try another search.
        </p>
      ) : (
        <div className="recipe-grid">
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
}
