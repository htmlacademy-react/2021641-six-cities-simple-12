import {useParams, Navigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import EquipmentList from '../../components/equipment-list/equipment-list';
import RoomPhoto from '../../components/room-photo/room-photo';
// import Comments from '../../components/comments/comments';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import {changeRating} from '../../utils';
import {AppRoute} from '../../const';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {store} from '../../store';
import {Offer} from '../../types/offer';
import {fetchOfferAction, fetchOffersNearbyAction} from '../../store/api-actions';

function Room(): JSX.Element {
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const offersNearby = useAppSelector((state) => state.offersNearby);
  const isCurrentOfferLoading = useAppSelector((state) => state.isCurrentOfferLoading);
  const {id} = useParams();
  const offerId = Number(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.dispatch(fetchOfferAction(offerId));
    store.dispatch(fetchOffersNearbyAction(offerId));
  }, [offerId, dispatch]);

  let allOffers: Offer[] = [];

  if (offersNearby !== null && currentOffer !== null) {
    allOffers = [...offersNearby, currentOffer];
  }

  if (isCurrentOfferLoading) {
    return <Spinner />;
  }

  if (currentOffer === null) {
    return (<Navigate to={AppRoute.NotFound} replace />);
  }

  const {images, rating, bedrooms, maxAdults, goods, price, host, isPremium, city, type} = currentOffer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <Helmet>
          <title>room</title>
        </Helmet>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) =>
                <RoomPhoto key={String(image) + String(index)} image={image}/>
              )}
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
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, index) => (
                    <EquipmentList key={String(item) + String(index)} item={item}/>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
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
                {/* <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2> */}
                <ul className="reviews__list">
                  {/* <Comments /> */}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map offers={allOffers} city={city} activeItem={offerId} className="property__map" />
        </section>
        <div className="container">
          <PlacesList offers={offersNearby} num={offerId} />
        </div>
      </main>
    </div>
  );
}

export default Room;
