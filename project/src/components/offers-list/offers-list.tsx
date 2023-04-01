import {Navigate} from 'react-router-dom';
import OfferCard from '../offer-card/offer-card';
import {Offer, City} from '../../types/offer';
import cn from 'classnames';
import {useState} from 'react';
import Map from '../map/map';
import HotelSort from '../hotel-sort/hotel-sort';
import NoPlaces from '../no-places/no-places';
import {AppRoute, SortsList} from '../../const';
import {sortOffers} from '../../utils';
import {useAppSelector} from '../../hooks/index';

type OfferListProps = {
  offers: Offer[];
  className: string;
  city: City;
}

function OffersList ({offers, className, city}: OfferListProps): JSX.Element {
  const [activeItem, setActiveItem] = useState<number | null>(-1);
  const sortType = useAppSelector((state) => state.sortType);
  const sortedOffers = sortOffers(offers, SortsList, sortType);

  if (activeItem === null) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  return (
    <div className={`cities__places-container container ${offers.length === 0 ? 'cities__places-container--empty' : ''}`}>
      {offers.length > 0 ? (
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <HotelSort />
          <div className={cn('cities__places-list', {
            'places__list  tabs__content' : className === 'cities',
            'near-places__list' : className === 'near',
          })}
          >
            {
              sortedOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  offer={offer}
                  className='cities'
                  setActiveItem={setActiveItem}
                />
              ))
            }
          </div>
        </section>) : <NoPlaces />}
      <div className="cities__right-section">
        {offers.length > 0 ? (
          <Map city={city} offers={offers} activeItem={activeItem} className="cities__map" />
        ) : ''}
      </div>
    </div>
  );
}

export default OffersList;
