import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AuthorizationStatus} from '../const';

export const cityChange = createAction('city/cityChange', (city: string) => ({payload: city}));
export const sortChange = createAction('offers/sortChange', (value: string) => ({payload: value}));
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadOffersNearby = createAction<Offer[]>('data/loadOffersNearby');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
