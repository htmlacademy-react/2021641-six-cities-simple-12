import {NameSpace} from '../../const';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';
import {State} from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].currentOffer;
export const getOffersNearby = (state: State): Offer[] => state[NameSpace.Data].offersNearby;
export const getCurrentReviews = (state: State): Review[] => state[NameSpace.Data].currentReviews;
export const getOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getCurrentOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isCurrentOfferLoading;
export const getReviewIsLoading = (state: State): boolean => state[NameSpace.Data].reviewIsLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
export const getTextClearStatus = (state: State): boolean => state[NameSpace.Data].textClear;
