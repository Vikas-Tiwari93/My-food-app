export type AddIngredientRequestBody={
    ingredientBody: IngredientBody
}
export type UpdateIngredientRequestBody=AddIngredientRequestBody &{sysId:string}
type IngredientBody={
    name: string, amount: string, sysId: string ;
}