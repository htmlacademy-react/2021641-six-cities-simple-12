export enum AppRoute {
  Login = '/login',
  Effects = '/effects',
  Root = '/',
  Room = '/offer/:id',
  OfferRoom = '/offer/',
  NotFound ='/404',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortsList = {
  POPULAR: 'Popular',
  PRICE_TO_HIGH: 'Price: low to high',
  PRICE_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORT_TYPE = 'Popular';
export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';
export const DEFAULT_AVATAR_URL = '../img/avatar.svg';
export const MAX_NUMBER_REVIEWS = 10;
export const MAX_NUMBER_IMAGE = 6;
