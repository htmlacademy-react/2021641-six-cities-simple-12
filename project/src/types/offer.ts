type Host = {
  avatar: string;
  name: string;
  status: boolean;
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
    id: number;
    type: string;
    previewImage: string[];
    isPremium: boolean;
    title: string;
    price: number;
    rating: number;
    rooms: number;
    maxAdults: number;
    options: string[];
    host: Host;
    city: City;
    location: Location;
};
