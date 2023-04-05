import {createReducer} from '@reduxjs/toolkit';
import {InitialState} from '../types/initial-state';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus,} from '../const';
import {cityChange, loadOffers,loadOffer, loadOffersNearby, sortChange, requireAuthorization, setOffersDataLoadingStatus} from './action';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  currentOffer: null,
  offersNearby: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(sortChange, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
