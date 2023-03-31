import {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type PlacesListProps = {
  offers: Offer[];
  className: string;
  num?: number;
}

function PlacesList({offers, className, num}: PlacesListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {offers.map((offer) => (
          offer.id !== num &&
          <OfferCard key={offer.id} offer={offer} className='near' />)
        )}

      </div>
    </section>
  );
}

export default PlacesList;
