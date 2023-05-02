import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace, Default} from '../../const';
import {SortingProcess} from '../../types/state';

const initialState: SortingProcess = {
  city: Default.city,
  sorting: Default.sort,
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
