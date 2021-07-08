export interface RecipieCollection {
  from: number;
  to: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: recipe[];
}

export interface recipe {
  recipe: {
    label: string;
    image: string;
    url: string;
  };
  _links: {
    self: {
      href: string;
      title: string;
    };
  };
}
