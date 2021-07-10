export interface RecipieDetail {
  recipe: {
    uri: string;
    label: string;
    image: string;
    source: string;
    url: string;
    shareAs: string;
    yield: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    ingredientLines: string[];
    ingredients: Ingredients[];
    calories: number;
    totalWeight: number;
    totalTime: number;
  };
  _links: {};
}

export interface Ingredients {
  text: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}
