export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
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
  },
  {
    id: "spicy-miso-ramen",
    title: "Spicy Miso Ramen",
    emoji: "🍜",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Japanese",
    description: "A cozy, savory broth with noodles and a little kick.",
  },
  {
    id: "lemon-butter-pasta",
    title: "Lemon Butter Pasta",
    emoji: "🍝",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Italian",
    description: "Silky lemon sauce, parmesan, and a handful of fresh herbs.",
  },
  {
    id: "mango-fish-tacos",
    title: "Mango Fish Tacos",
    emoji: "🌮",
    minutes: 30,
    difficulty: "Medium",
    cuisine: "Mexican",
    description: "Golden fish with zingy mango salsa in warm tortillas.",
  },
  {
    id: "fluffy-pancakes",
    title: "Fluffy Berry Pancakes",
    emoji: "🥞",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    description: "A tall, soft stack topped with berries and maple syrup.",
  },
  {
    id: "green-curry",
    title: "Coconut Green Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Thai",
    description: "A fragrant coconut curry packed with colorful vegetables.",
  },
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Crisp, chewy crust with tomato, mozzarella, and basil.",
  },
  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    emoji: "🍰",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Dessert",
    description: "A warm, chocolatey little treat, ready in minutes.",
  },
];
