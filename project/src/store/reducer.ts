import {createReducer} from '@reduxjs/toolkit';
import {InitialState} from '../types/initial-state';
import {DEFAULT_CITY} from '../const';
import {cityChange, loadOffer} from './action';
import {offers} from '../mocks/offers';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offers = action.payload;
    });
});
