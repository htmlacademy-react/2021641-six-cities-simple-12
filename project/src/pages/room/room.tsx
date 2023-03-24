import {Link, useParams, Navigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import ReviewForm from '../../components/review-form/review-form';
import EquipmentList from '../../components/equipment-list/equipment-list';
import RoomPhoto from '../../components/room-photo/room-photo';
import Comments from '../../components/comments/comments';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import {Offer, City} from '../../types/offer';
import {Reviews} from '../../types/review';
import changeRating from '../../utils';
import {AppRoute} from '../../const';
import {useState} from 'react';

type RoomProps = {
  offers: Offer[];
  reviews: Reviews[];
  city: City;
};


function Room({offers, reviews, city}: RoomProps): JSX.Element {
  const params = useParams();
  const offerProperty = offers.find((offer) => offer.id === Number(params.id));
  const [, setActiveItem] = useState<number | undefined>(undefined);

  if (offerProperty === undefined) {
    return (<Navigate to={AppRoute.NotFound} />);
  }

  const onListCardHover = (id: number | undefined) => {
    setActiveItem(id);
  };

  const nearOffers = offers.filter((offer) => offer.id !== Number(params.id));

  const {rating, rooms, maxAdults, price, host, isPremium, id} = offerProperty;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <Helmet>
          <title>room</title>
        </Helmet>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <RoomPhoto offerProperty={offerProperty}/>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: changeRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerProperty.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offerProperty.rooms > 1 ? `${rooms} Bedrooms` : `${rooms} Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  {offerProperty.maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <EquipmentList offerProperty={offerProperty}/>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.status && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  <Comments reviews={reviews} />
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map offers={offers} city={city} activeItem={id} className="property__map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearOffers} className='near' onListCardHover={onListCardHover} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
