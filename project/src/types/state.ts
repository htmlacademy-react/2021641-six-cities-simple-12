import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';
import {Offer} from './offer';
import {Review} from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type OffersData = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  isCurrentOfferLoading: boolean;
  currentOffer: Offer | null;
  offersNearby: Offer[] | [];
  currentReviews: Review[];
  reviewIsLoading: boolean;
  hasError: boolean;
  textClear: boolean;
}

export type SortingProcess = {
  city: string;
  sorting: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
