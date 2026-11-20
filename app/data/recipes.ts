export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "crispy-chickpea-bowl",
    title: "Crispy Chickpea Bowl",
    emoji: "🥗",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    description: "Crunchy chickpeas, creamy tahini, and all the fresh greens.",
    ingredients: [
      "1 can chickpeas, drained",
      "1 tablespoon olive oil",
      "1 teaspoon smoked paprika",
      "2 cups cooked quinoa",
      "1 cucumber, chopped",
      "3 tablespoons tahini",
      "Juice of 1 lemon",
    ],
    steps: [
      "Pat the chickpeas dry and toss them with olive oil and paprika.",
      "Roast at 220 C (425 F) for 20 minutes, until crisp.",
      "Divide the quinoa and cucumber between bowls.",
      "Top with chickpeas and drizzle with tahini mixed with lemon juice.",
    ],
  },
  {
    id: "spicy-miso-ramen",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "A cozy, savory broth with noodles and a little kick.",
    ingredients: [
      "2 portions ramen noodles",
      "4 cups vegetable broth",
      "2 tablespoons white miso",
      "1 tablespoon chili oil",
      "2 eggs",
      "2 scallions, sliced",
    ],
    steps: [
      "Soft-boil the eggs for 7 minutes, then cool and peel them.",
      "Warm the broth in a pot and whisk in the miso and chili oil.",
      "Cook the ramen noodles according to the package directions.",
      "Divide noodles and broth between bowls; finish with eggs and scallions.",
    ],
  },
  {
    id: "lemon-butter-pasta",
    title: "Lemon Butter Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "Silky lemon sauce, parmesan, and a handful of fresh herbs.",
    ingredients: [
      "300 g spaghetti",
      "3 tablespoons butter",
      "1 lemon, zested and juiced",
      "1/2 cup grated parmesan",
      "¼ cup pasta water",
      "Fresh parsley, chopped",
    ],
    steps: [
      "Boil the spaghetti in salted water until just al dente.",
      "Melt the butter in a pan and stir in the lemon zest and juice.",
      "Add the pasta and a splash of pasta water; toss until glossy.",
      "Fold in parmesan and parsley, then serve straight away.",
    ],
  },
  {
    id: "mango-fish-tacos",
    title: "Mango Fish Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Mexican",
    description: "Golden fish with zingy mango salsa in warm tortillas.",
    ingredients: [
      "400 g white fish fillets",
      "1 teaspoon chili powder",
      "8 small corn tortillas",
      "1 ripe mango, diced",
      "½ red onion, finely chopped",
      "1 lime",
      "1 cup shredded cabbage",
    ],
    steps: [
      "Season the fish with chili powder and a pinch of salt.",
      "Pan-fry for 3–4 minutes per side, until flaky.",
      "Mix mango and red onion with lime juice to make a quick salsa.",
      "Flake the fish into warm tortillas and top with salsa and cabbage.",
    ],
  },
  {
    id: "fluffy-pancakes",
    title: "Fluffy Berry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    description: "A tall, soft stack topped with berries and maple syrup.",
    ingredients: [
      "1½ cups all-purpose flour",
      "2 tablespoons sugar",
      "1 teaspoon baking powder",
      "1 egg",
      "1 1/4 cups milk",
      "1 cup mixed berries",
      "Maple syrup, to serve",
    ],
    steps: [
      "Whisk flour, sugar, and baking powder in a large bowl.",
      "Add the egg and milk; stir just until the batter comes together.",
      "Cook small ladles of batter in a buttered pan until bubbles form, then flip.",
      "Stack the pancakes and serve with berries and maple syrup.",
    ],
  },
  {
    id: "green-curry",
    title: "Coconut Green Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Thai",
    description: "A fragrant coconut curry packed with colorful vegetables.",
    ingredients: [
      "2 tablespoons green curry paste",
      "1 can coconut milk",
      "1 red bell pepper, sliced",
      "1 zucchini, chopped",
      "1 cup snap peas",
      "1 tablespoon soy sauce",
      "Steamed rice, to serve",
    ],
    steps: [
      "Warm the curry paste in a saucepan for 1 minute.",
      "Pour in the coconut milk and bring to a gentle simmer.",
      "Add the vegetables and cook for 10–12 minutes until tender.",
      "Season with soy sauce and serve over steamed rice.",
    ],
  },
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Crisp, chewy crust with tomato, mozzarella, and basil.",
    ingredients: [
      "1 ball pizza dough",
      "½ cup tomato sauce",
      "150 g fresh mozzarella",
      "1 tablespoon olive oil",
      "Fresh basil leaves",
      "Flour, for dusting",
    ],
    steps: [
      "Heat the oven to its highest setting with a baking tray inside.",
      "Stretch the dough into a thin round on a floured surface.",
      "Spread on tomato sauce and add torn mozzarella.",
      "Bake for 8-10 minutes; finish with olive oil and fresh basil.",
    ],
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    emoji: "🍰",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Dessert",
    description: "A warm, chocolatey little treat, ready in minutes.",
    ingredients: [
      "4 tablespoons all-purpose flour",
      "2 tablespoons cocoa powder",
      "2 tablespoons sugar",
      "3 tablespoons milk",
      "1 tablespoon neutral oil",
      "2 tablespoons chocolate chips",
    ],
    steps: [
      "Stir the flour, cocoa, and sugar together in a microwave-safe mug.",
      "Mix in the milk and oil until smooth.",
      "Fold in the chocolate chips.",
      "Microwave for 60–80 seconds, then let it rest for a minute.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
