import {createReducer} from '@reduxjs/toolkit';
import {InitialState} from '../types/initial-state';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, AuthorizationStatus,} from '../const';
import {setError, cityChange, loadOffers, loadOffer, loadOffersNearby, sortChange, requireAuthorization, setOffersDataLoadingStatus, setCurrentOfferLoadingStatus, getUserData} from './action';

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  isCurrentOfferLoading: true,
  currentOffer: null,
  offersNearby: [],
  userData: null,
  error: null,
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
    .addCase(setCurrentOfferLoadingStatus, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
