import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';
import {SortingProcess} from '../../types/state';

const initialState: SortingProcess = {
  city: DEFAULT_CITY,
  sorting: DEFAULT_SORT_TYPE,
};

export const sortingProcess = createSlice({
  name: NameSpace.Sorting,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload;
    }
  },
});

export const {changeCity, changeSort} = sortingProcess.actions;
