import {Offer} from './offer';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';

export type InitialState = {
  offersNearby: Offer[] | [];
  city: string;
  offers: Offer[];
  currentOffer: Offer | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  isCurrentOfferLoading: boolean;
  userData: UserData | null;
  error: string | null;
};
