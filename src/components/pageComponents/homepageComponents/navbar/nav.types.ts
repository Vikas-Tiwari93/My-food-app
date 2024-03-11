export type ProductItemType= {
    id: string,
    name: string,
  }

  export type ProductType= {
    id: string,
    name: string,
    items: (ProductItemType | ProductType)[],
  }