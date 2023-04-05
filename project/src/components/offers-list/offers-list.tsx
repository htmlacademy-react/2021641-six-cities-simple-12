import {Navigate} from 'react-router-dom';
import OfferCard from '../offer-card/offer-card';
import {Offer, City} from '../../types/offer';
import {useState} from 'react';
import Map from '../map/map';
import HotelSort from '../hotel-sort/hotel-sort';
import NoPlaces from '../no-places/no-places';
import {AppRoute, SortsList} from '../../const';
import {sortOffers} from '../../utils';
import {useAppSelector} from '../../hooks/index';

type OfferListProps = {
  filteredOffers: Offer[];
  city: City;
  activeOffer: string;
}

function OffersList ({filteredOffers, city, activeOffer}: OfferListProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<number | null>(-1);
  const sortType = useAppSelector((state) => state.sortType);
  const sortedOffers = sortOffers(filteredOffers, SortsList, sortType);

  if (activeItem === null) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  return (
    <div className={`cities__places-container container ${filteredOffers.length === 0 ? 'cities__places-container--empty' : ''}`}>
      {filteredOffers.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} places to stay in {activeOffer}</b>
          <HotelSort />
          <div className="cities__places-list places__list tabs__content">
            {
              sortedOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  setActiveItem={setActiveItem}
                />
              ))
            }
          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">
        {filteredOffers.length > 0 ? (
          <Map city={city} offers={filteredOffers} activeItem={activeItem} className="cities__map" />
        ) : ''}
      </div>
    </div>
  );
}

export default OffersList;
