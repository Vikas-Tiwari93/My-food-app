import { Dispatch, combineReducers } from "@reduxjs/toolkit";

import {signinSliceReducer} from "../slices/authSlice"
import { ingredientSliceReducer } from "../slices/IngredientsSlice";
import { recepieSliceReducer } from "../slices/recepieSlice";

const rootReducer = combineReducers({
 
  signinSlice: signinSliceReducer,
  IngredientSlice:ingredientSliceReducer,
  recepieSlice:recepieSliceReducer
});


export default rootReducer;