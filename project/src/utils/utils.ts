import {Offer} from '../types/offer';

export function changeRating (item: number) {
  return (
    `${Math.round(item) / 0.05}%`
  );
}

export const sortOffers = (offers: Offer[], sortList: {[key: string]: string}, type: string) => {
  switch (type) {
    case sortList.PRICE_TO_HIGH:
      return [...offers].sort((a, b) => a.price - b.price);
      break;
    case sortList.PRICE_TO_LOW:
      return [...offers].sort((a, b) => b.price - a.price);
      break;
    case sortList.TOP_RATED:
      return [...offers].sort((a, b) => b.rating - a.rating);
      break;
    default:
      return offers;
  }
};

export const getRandomArrayItem = (items: string[] | number[]):string | number => items[Math.floor(Math.random() * items.length)];
