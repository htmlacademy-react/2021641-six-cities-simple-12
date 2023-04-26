import {useParams, Navigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import EquipmentList from '../../components/equipment-list/equipment-list';
import RoomPhoto from '../../components/room-photo/room-photo';
import PlacesList from '../../components/places-list/places-list';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import {changeRating} from '../../utils/utils';
import {AppRoute, MAX_NUMBER_REVIEWS, MAX_NUMBER_IMAGE} from '../../const';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {Offer} from '../../types/offer';
import {fetchOfferAction, fetchOffersNearbyAction, fetchReviewsAction} from '../../store/api-actions';
import {getCurrentOffer, getOffersNearby, getCurrentOffersDataLoading, getCurrentReviews} from '../../store/offers-data/offers-process.selector';

function Room(): JSX.Element {
  const currentOffer = useAppSelector(getCurrentOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const isCurrentOfferLoading = useAppSelector(getCurrentOffersDataLoading);
  const currentReviews = useAppSelector(getCurrentReviews);
  const offerId = useParams<string>();
  const currentOfferId = Number(offerId.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(currentOfferId));
    dispatch(fetchOffersNearbyAction(currentOfferId));
    dispatch(fetchReviewsAction(currentOfferId));
  }, [currentOfferId, dispatch]);

  let sortingReviews = currentReviews.slice();
  sortingReviews = sortingReviews.sort((b, a) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, MAX_NUMBER_REVIEWS);

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

  const {images, rating, bedrooms, maxAdults, goods, price, host, isPremium, city, type, id} = currentOffer;

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
              {images.map((image, index) => (
                <RoomPhoto key={String(image) + String(index)} image={image}/>
              )).slice(0, MAX_NUMBER_IMAGE)}
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
              <ReviewList reviews={sortingReviews} currentOfferId={currentOfferId}/>
              {/* <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  <Comments />
                </ul>
                <ReviewForm />
              </section> */}
            </div>
          </div>
          <Map offers={allOffers} city={city} activeItem={id} className="property__map" />
        </section>
        <div className="container">
          <PlacesList offers={offersNearby} num={id} />
        </div>
      </main>
    </div>
  );
}

export default Room;
