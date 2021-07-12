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
    totalNutrients: Nutrients;
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

export interface NutrientInfo {
  label: string;
  quantity: number;
  unit: string;
}

export interface Nutrients {
  ENERC_KCAL: NutrientInfo;
  FAT: NutrientInfo;
  FASAT: NutrientInfo;
  FAMS: NutrientInfo;
  FAPU: NutrientInfo;
  CHOCDF: NutrientInfo;
  FIBTG: NutrientInfo;
  SUGAR: NutrientInfo;
  PROCNT: NutrientInfo;
  CHOLE: NutrientInfo;
  NA: NutrientInfo;
  CA: NutrientInfo;
  MG: NutrientInfo;
  K: NutrientInfo;
  FE: NutrientInfo;
  ZN: NutrientInfo;
  P: NutrientInfo;
  VITA_RAE: NutrientInfo;
  VITC: NutrientInfo;
  THIA: NutrientInfo;
  RIBF: NutrientInfo;
  NIA: NutrientInfo;
  VITB6A: NutrientInfo;
  FOLDFE: NutrientInfo;
  FOLFD: NutrientInfo;
  FOLAC: NutrientInfo;
  VITB12: NutrientInfo;
  VITD: NutrientInfo;
  TOCPHA: NutrientInfo;
  VITK1: NutrientInfo;
  WATER: NutrientInfo;
}
