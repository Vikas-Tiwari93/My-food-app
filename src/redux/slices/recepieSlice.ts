import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addRecepie,
  deleteRecepie,
  getAllRecepie,
  getSearchRecepie,
  updateRecepie,
} from "../../services/APIservices/pagesAPI/utilityAPIs/recepies/recepiesAPIs";
import {
  AddRecepieRequestBody,
  GetSearchParamType,
  UpdateRecepieBody,
} from "../../services/APIservices/pagesAPI/utilityAPIs/recepies/recepiesAPIs.type";
import { customToastError, customToastSuccess } from "../../utils/functions/customToast";

let initialState = {
  allRecelieList: [],
  searchRecepie: [],
  isLoadingRecepieList: false,
  isLoadingRecepie: false,
  isUpdatingRecepie: false,
  isDeletingRecepie: false,
};
//get all recepies
export const getAllRecepieQuery = createAsyncThunk<any, void>(
  "getAllRecepieQuery",
  async () => {
    const fetch = await getAllRecepie();
    return fetch.data;
  }
);

// get searched recepies list
export const getSearchedRecepieQuery = createAsyncThunk<
  any,
  GetSearchParamType
>("getSearchedRecepieQuery", async ({ searchPathParam }) => {
  const fetch = await getSearchRecepie({ searchPathParam });
  return fetch.data;
});

//add recepie
export const addRecepieQuery = createAsyncThunk<any, AddRecepieRequestBody>(
  "addRecepieQuery",
  async ({ recepieBody }) => {
    const fetch = await addRecepie({ recepieBody });
    return fetch.data;
  }
);
// update Recepie
export const updateRecepieQuery = createAsyncThunk<any, UpdateRecepieBody>(
  "updateRecepieQuery",
  async ({ sysId, recepieBody }) => {
    const fetch = await updateRecepie({ sysId, recepieBody });
    return fetch.data;
  }
);
//delete Recepie
export const deleteRecepieQuery = createAsyncThunk<any, GetSearchParamType>(
  "deleteRecepieQuery",
  async ({ searchPathParam }) => {
    const fetch = await deleteRecepie({ searchPathParam });
    return fetch.data;
  }
);

const recepieSlice = createSlice({
  name: "recepieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecepieQuery.pending, (state) => {
        state.isLoadingRecepieList = true;
      })
      .addCase(
        getAllRecepieQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isLoadingRecepieList = false;
          
        }
      )
      .addCase(getAllRecepieQuery.rejected, (state) => {
        state.isLoadingRecepieList = false;
      })
      .addCase(getSearchedRecepieQuery.pending, (state) => {
        state.isLoadingRecepie = true;
      })
      .addCase(
        getSearchedRecepieQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isLoadingRecepie = false;
        }
      )
      .addCase(getSearchedRecepieQuery.rejected, (state) => {
        state.isLoadingRecepie = false;
      })
      .addCase(addRecepieQuery.pending, (state) => {
        state.isUpdatingRecepie = true;
      })
      .addCase(
        addRecepieQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isUpdatingRecepie = false;
          customToastSuccess("Recepie addition successful")
        }
      )
      .addCase(addRecepieQuery.rejected, (state) => {
        state.isUpdatingRecepie = false;
        customToastError("Recepie addition failed")
      })
      .addCase(updateRecepieQuery.pending, (state) => {
        state.isUpdatingRecepie = true;
      })
      .addCase(
        updateRecepieQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isUpdatingRecepie = false;
          customToastSuccess("Recepie updated ")
        }
      )
      .addCase(updateRecepieQuery.rejected, (state) => {
        state.isUpdatingRecepie = false;
        customToastError("Recepie update failed")
      }).addCase(deleteRecepieQuery.pending, (state) => {
        state.isDeletingRecepie = true;
      })
      .addCase(
        deleteRecepieQuery.fulfilled,
        (state, action: PayloadAction<any>) => {
          // const { username, password, role, imageUrl,  sys_id ,email} = action.payload;

          state.isDeletingRecepie = false;
          customToastSuccess("Recepie deleted ")
        }
      )
      .addCase(deleteRecepieQuery.rejected, (state) => {
        state.isDeletingRecepie = false;
        customToastError("Recepie deleted failed ")
      });
  },
});

export const recepieSliceReducer = recepieSlice.reducer;
