import { deleteRequest, getRequest, postRequest, putRequest } from "../../../AxiosServices";
import { GetSearchParamType } from "../recepies/recepiesAPIs.type";
import { AddIngredientRequestBody, UpdateIngredientRequestBody } from "./ingredientAPIs.types";

export const getAllIngredients = async () => {
    const END_POINT = `/api/x_1321848_food_r_0/food_app/all_ingredients`;
    return getRequest(END_POINT, {
      basicAuth: true,
      isJson: true,
    });
  };
  export const getSearchIngredients = async ({ searchPathParam }: GetSearchParamType) => {
    const END_POINT = `/api/x_1321848_food_r_0/food_app/ingredient_search/:Ingredient`
    const urlWithParams = END_POINT.replace(':Ingredient', searchPathParam);
    return getRequest(urlWithParams, {
      basicAuth: true,
      isJson: true,
    });
  };
  export const addIngredients = async ({
      ingredientBody
  }:AddIngredientRequestBody) => {
      const END_POINT = `/api/x_1321848_food_r_0/food_app/add_ingredient`;
      return postRequest(END_POINT,JSON.stringify(ingredientBody), {
        basicAuth: true,
        isJson: true,
      });
    };
  
  export const updateIngredients = async ({
      sysId,ingredientBody:updatedBody
  }:UpdateIngredientRequestBody) => {
      const END_POINT = `/api/x_1321848_food_r_0/food_app/update_ingredient/:ingredientId`;
      const urlWithParams = END_POINT.replace(':ingredientId', sysId);
      return putRequest(urlWithParams,JSON.stringify(updatedBody), {
        basicAuth: true,
        isJson: true,
      });
    };
  
    export const deleteIngredient = async ({ searchPathParam }: GetSearchParamType) => {
      const END_POINT = `/api/x_1321848_food_r_0/food_app/delete_ingredient/:ingredientId`
      const urlWithParams = END_POINT.replace(':ingredientId', searchPathParam);
      return deleteRequest(urlWithParams, {
        basicAuth: true,
        isJson: true,
      });
    };