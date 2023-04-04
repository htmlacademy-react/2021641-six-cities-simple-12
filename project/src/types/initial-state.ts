import {Offer} from './offer';
import {AuthorizationStatus} from '../const';

export type InitialState = {
  offersNearby: Offer[] | [];
  city: string;
  offers: Offer[];
  currentOffer: Offer | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
};
