import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';

type OfferProps = {
  offer: Offer;
  onOfferCardMouseEnter: (id: number) => void;
};

function OfferCard ({offer, onOfferCardMouseEnter}: OfferProps): JSX.Element {
  const {id} = offer;
  const changeRating = `${offer.rating / 0.05}%`;
  const offerUrl = `/offer/${offer.id}`;

  return (
    <article className="cities__card place-card" key={id} onMouseEnter={() => {onOfferCardMouseEnter(id);}}>
      {offer.premium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={offer.src} width="260" height="200" alt="Apartment" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: changeRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{offer.description}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
