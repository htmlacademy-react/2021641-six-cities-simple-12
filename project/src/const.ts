export enum AppRoute {
  Login = '/login',
  Effects = '/effects',
  Root = '/',
  Room = '/offer/:id',
  OfferRoom = '/offer/',
  NotFound ='/404',
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITY = 'Paris';

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';
