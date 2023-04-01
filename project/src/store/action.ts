import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const Action = {
  CITY_CHANGE: 'CITY_CHANGE',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SORT_CHANGE: 'SORT_CHANGE',
};

export const cityChange = createAction(Action.CITY_CHANGE, (city: string) => ({payload: city}));
export const loadOffer = createAction<Offer[]>(Action.LOAD_OFFERS);
export const sortChange = createAction(Action.SORT_CHANGE, (value: string) => ({payload: value}));
