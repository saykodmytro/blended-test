import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "../services/apiGeolocation";

export const baseCurrencyThunk = createAsyncThunk(
  "fetchBaseCurrency",
  async (crd, thunkApi) => {
    const { baseName } = thunkApi.getState();
    if (baseName) {
      return thunkApi.rejectWithValue("We already have base currency!");
    }
    try {
      const data = await getUserInfo(crd);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
