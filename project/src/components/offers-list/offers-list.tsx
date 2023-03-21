import OfferCard from '../offer-card/offer-card';
import HotelSort from '../hotel-sort/hotel-sort';
import NoPlaces from '../no-places/no-places';
import Map from '../map/map';
import {Offer, City} from '../../types/offer';
import {useState} from 'react';

type OfferListProps = {
  offers: Offer[];
  city: City;
}

function OffersList ({offers, city}: OfferListProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(-1);

  return (
    <div className="cities__places-container container">
      {offers.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <HotelSort />
          </form>
          <div className="near-places__list places__list tabs__content">
            {offers.map((offer) =>
              (<OfferCard key={offer.id} offer={offer} setActiveItem={setActiveItem} />
              ))}
          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">
        <Map offers={offers} city={city} activeItem={activeItem} />
      </div>
    </div>
  );
}

export default OffersList;
