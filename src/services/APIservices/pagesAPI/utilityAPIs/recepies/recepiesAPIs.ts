import { deleteRequest, getRequest, postRequest, putRequest } from "../../../AxiosServices";

import { AddRecepieRequestBody, GetSearchParamType, UpdateRecepieBody } from "./recepiesAPIs.type";

export const getAllRecepie = async () => {
  const END_POINT = `/api/x_1321848_food_r_0/sign_in`;
  return getRequest(END_POINT, {
    basicAuth: true,
    isJson: true,
  });
};
export const getSearchRecepie = async ({ searchPathParam }: GetSearchParamType) => {
  const END_POINT = `/api/x_1321848_food_r_0/food_app//recepie_detail/:foodId`
  const urlWithParams = END_POINT.replace(':foodId', searchPathParam);
  return getRequest(urlWithParams, {
    basicAuth: true,
    isJson: true,
  });
};
export const addRecepie = async ({
    recepieBody
}:AddRecepieRequestBody) => {
    const END_POINT = `/api/x_1321848_food_r_0/food_app/add_recepie`;
    return postRequest(END_POINT,JSON.stringify(recepieBody), {
      basicAuth: true,
      isJson: true,
    });
  };

export const updateRecepie = async ({
    sysId,recepieBody:updatedBody
}:UpdateRecepieBody) => {
    const END_POINT = `/api/x_1321848_food_r_0/food_app/update_recepie_details/{recepieId}:recepieId`;
    const urlWithParams = END_POINT.replace(':recepieId', sysId);
    return putRequest(urlWithParams,JSON.stringify(updatedBody), {
      basicAuth: true,
      isJson: true,
    });
  };

  export const deleteRecepie = async ({ searchPathParam }: GetSearchParamType) => {
    const END_POINT = `/api/x_1321848_food_r_0/food_app//delete_recepie/:foodId`
    const urlWithParams = END_POINT.replace(':foodId', searchPathParam);
    return deleteRequest(urlWithParams, {
      basicAuth: true,
      isJson: true,
    });
  };