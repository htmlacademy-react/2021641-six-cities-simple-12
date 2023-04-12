type Host = {
  id: number;
  avatarUrl: string;
  name: string;
  status: boolean;
  isPro: boolean;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Offer = {
    id: OfferId;
    type: string;
    previewImage: string;
    images: string[];
    isPremium: boolean;
    title: string;
    description: string;
    price: number;
    rating: number;
    bedrooms: number;
    maxAdults: number;
    goods: string[];
    host: Host;
    city: City;
    location: Location;
};

export type OfferId = number;
