export enum AppRoute {
  Login = '/login',
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

export enum NameSpace {
  Data = 'DATA',
  Sorting = 'SORTING',
  User = 'USER',
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

export const Default = {
  city: 'Paris',
  sort: 'Popular',
  avatar: '../img/avatar.svg',
};

export const UrlMarker = {
  default: '/img/pin.svg',
  current: '/img/pin-active.svg',
};

export const MaxNumber = {
  reviews: 10,
  image: 6,
};

export const REGEX = /([a-z]+[0-9])|([0-9]+[a-z])/gi;
