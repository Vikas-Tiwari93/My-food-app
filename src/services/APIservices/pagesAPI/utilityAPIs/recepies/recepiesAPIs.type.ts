export type GetSearchParamType={
    searchPathParam:string
}
export type AddRecepieBodyType={

    name: string;
    type: boolean;
    detailedType:string;
    shortDescription:string;
    ingredients: 
      { name: string, amount: string, sysId: string }[];
     
    steps:   { step: string, details:string }[],

}

export type AddRecepieRequestBody={
    recepieBody:AddRecepieBodyType
}
type SysId={
    sysId: string;
}
export type UpdateRecepieBody=AddRecepieRequestBody &SysId