import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addIngredients, deleteIngredient, getAllIngredients, getSearchIngredients, updateIngredients } from "../../services/APIservices/pagesAPI/utilityAPIs/ingredients/IngredientsAPIs";
import { GetSearchParamType } from "../../services/APIservices/pagesAPI/utilityAPIs/recepies/recepiesAPIs.type";
import { AddIngredientRequestBody, UpdateIngredientRequestBody } from "../../services/APIservices/pagesAPI/utilityAPIs/ingredients/ingredientAPIs.types";

let initialState = {
  allIngrelientList: [],
  searchIngredients: [],
  isLoadingIngredientList: false,
  isLoadingIngredientSearch: false,
  isUpdatingIngredient: false,
  isDeletingIngredient: false,
};
//get all recepies
export const getAllIngredientsQuery = createAsyncThunk<any, void>(
  "getAllIngredientsQuery",
  async () => {
    const fetch = await getAllIngredients();
    return fetch.data;
  }
);

// get searched recepies list
export const getSearchedIngredientsQuery = createAsyncThunk<
  any,
  GetSearchParamType
>("getSearchedIngredientsQuery", async ({ searchPathParam }) => {
  const fetch = await getSearchIngredients({ searchPathParam });
  return fetch.data;
});

//add recepie
export const addIngredientQuery = createAsyncThunk<any, AddIngredientRequestBody>(
  "addIngredientQuery",
  async ({ ingredientBody }) => {
    const fetch = await addIngredients({ ingredientBody });
    return fetch.data;
  }
);
// update Recepie
export const updateIngredientQuery = createAsyncThunk<any, UpdateIngredientRequestBody>(
  "updateIngredientQuery",
  async ({ sysId, ingredientBody }) => {
    const fetch = await updateIngredients({ sysId, ingredientBody });
    return fetch.data;
  }
);
//delete Recepie
export const deleteIngredientQuery = createAsyncThunk<any, GetSearchParamType>(
  "deleteIngredientQuery",
  async ({ searchPathParam }) => {
    const fetch = await deleteIngredient({ searchPathParam });
    return fetch.data;
  }
);

const IngredientSlice = createSlice({
  name: "recepieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllIngredientsQuery.pending, (state) => {
        state.isLoadingIngredientList = true;
      })
      .addCase(
        getAllIngredientsQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isLoadingIngredientList = false;
        }
      )
      .addCase(getAllIngredientsQuery.rejected, (state) => {
        state.isLoadingIngredientList = false;
      })
      .addCase(getSearchedIngredientsQuery.pending, (state) => {
        state.isLoadingIngredientSearch = true;
      })
      .addCase(
        getSearchedIngredientsQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isLoadingIngredientSearch = false;
        }
      )
      .addCase(getSearchedIngredientsQuery.rejected, (state) => {
        state.isLoadingIngredientSearch = false;
      })
      .addCase(addIngredientQuery.pending, (state) => {
        state.isUpdatingIngredient = true;
      })
      .addCase(
        addIngredientQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isUpdatingIngredient = false;
        }
      )
      .addCase(addIngredientQuery.rejected, (state) => {
        state.isUpdatingIngredient = false;
      })
      .addCase(updateIngredientQuery.pending, (state) => {
        state.isUpdatingIngredient = true;
      })
      .addCase(
        updateIngredientQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isUpdatingIngredient = false;
        }
      )
      .addCase(updateIngredientQuery.rejected, (state) => {
        state.isUpdatingIngredient = false;
      }).addCase(deleteIngredientQuery.pending, (state) => {
        state.isDeletingIngredient = true;
      })
      .addCase(
        deleteIngredientQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isDeletingIngredient = false;
        }
      )
      .addCase(deleteIngredientQuery.rejected, (state) => {
        state.isDeletingIngredient = false;
      });
  },
});

export const ingredientSliceReducer = IngredientSlice.reducer;
