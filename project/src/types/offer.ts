export type Offer = {
    id: number;
    type: string;
    src: string;
    premium: boolean;
    description: string;
    price: number;
    rating: number;
    rooms: string;
    adults: number;
    options: string[];
};
