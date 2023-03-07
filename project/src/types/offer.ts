export type OfferCardType = {
    id: number;
    type: string;
    src: string;
    description: string;
    price: string;
    rooms: string;
    adults: string;
};

export type Offer = OfferCardType[];
