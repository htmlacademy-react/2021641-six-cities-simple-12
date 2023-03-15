type Host = {
  avatar: string;
  name: string;
  status: boolean;
}

export type Offer = {
    id: number;
    type: string;
    src: string[];
    premium: boolean;
    description: string;
    price: number;
    rating: number;
    rooms: number;
    adults: number;
    options: string[];
    host: Host;
};
