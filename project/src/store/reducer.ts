import {createReducer} from '@reduxjs/toolkit';
import {InitialState} from '../types/initial-state';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../const';
import {cityChange, loadOffer, sortChange} from './action';
import {offers} from '../mocks/offers';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers,
  sortType: DEFAULT_SORT_TYPE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortChange, (state, action) => {
      state.sortType = action.payload;
    });
});
