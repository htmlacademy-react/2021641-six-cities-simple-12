import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';
import {useState} from 'react';

type OfferListProps = {
  offers: Offer[];
}

function OffersList ({offers}: OfferListProps): JSX.Element {
  const [card, setCard] = useState(-1);
  // console.log(card);

  return (
    <div className="near-places__list places__list tabs__content">
      {offers.map((offer) =>
        (<OfferCard key={offer.id} offer={offer} setCard={setCard} />
        ))}
    </div>
  );
}

export default OffersList;
