class Meal {
  id: string;
  categoryIds: Array<string>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingrediants: Array<string>;
  steps: Array<string>;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  constructor(
    id: string,
    categoryIds: Array<string>,
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingrediants: Array<string>,
    steps: Array<string>,
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.ingrediants = ingrediants;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
    this.duration = duration;
    this.isVegan = isVegan;
  }
}

export default Meal;
