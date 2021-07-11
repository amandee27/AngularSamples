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
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    totalNutrients: {
      ENERC_KCAL: {
        label: string;
        quantity: number;
        unit: string;
      };
      FAT: {
        label: string;
        quantity: number;
        unit: string;
      };
      FASAT: { label: string; quantity: number; unit: string };
      FAMS: { label: string; quantity: number; unit: string };
      FAPU: { label: string; quantity: number; unit: string };
      CHOCDF: { label: string; quantity: number; unit: string };
      FIBTG: { label: string; quantity: number; unit: string };
      SUGAR: { label: string; quantity: number; unit: string };
      PROCNT: { label: string; quantity: number; unit: string };
      CHOLE: { label: string; quantity: number; unit: string };
      NA: { label: string; quantity: number; unit: string };
      CA: { label: string; quantity: number; unit: string };
      MG: { label: string; quantity: number; unit: string };
      K: { label: string; quantity: number; unit: string };
      FE: { label: string; quantity: number; unit: string };
      ZN: { label: string; quantity: number; unit: string };
      P: { label: string; quantity: number; unit: string };
      VITA_RAE: { label: string; quantity: number; unit: string };
      VITC: { label: string; quantity: number; unit: string };
      THIA: { label: string; quantity: number; unit: string };
      RIBF: { label: string; quantity: number; unit: string };
      NIA: { label: string; quantity: number; unit: string };
      VITB6A: { label: string; quantity: number; unit: string };
      FOLDFE: { label: string; quantity: number; unit: string };
      FOLFD: { label: string; quantity: number; unit: string };
      FOLAC: { label: string; quantity: number; unit: string };
      VITB12: { label: string; quantity: number; unit: string };
      VITD: { label: string; quantity: number; unit: string };
      TOCPHA: { label: string; quantity: number; unit: string };
      VITK1: { label: string; quantity: number; unit: string };
      WATER: { label: string; quantity: number; unit: string };
    };
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
