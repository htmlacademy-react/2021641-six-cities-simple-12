import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';
import cn from 'classnames';

type OfferListProps = {
  offers: Offer[];
  className: string;
  onListCardHover: (id: number | undefined) => void;
}

function OffersList ({offers, className, onListCardHover}: OfferListProps): JSX.Element {
  const handleOfferCardMouseOver = (id: number) => {
    onListCardHover(id);
  };

  const handleOfferCardMouseOut = (id: number | undefined) => {
    onListCardHover(-1);
  };

  return (
    <div className={cn('cities__places-list', {
      'places__list  tabs__content' : className === 'cities',
      'near-places__list' : className === 'near',
    })}
    >
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            className={className}
            onMouseOver={handleOfferCardMouseOver}
            onMouseOut={handleOfferCardMouseOut}
          />
        ))
      }
    </div>
  );
}

export default OffersList;
