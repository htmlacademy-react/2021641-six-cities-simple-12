import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';
import {changeRating} from '../../utils';

type OfferProps = {
  offer: Offer;
  setActiveItem?(id: number): void;
};

function OfferCard ({offer, setActiveItem}: OfferProps): JSX.Element {
  const {id, previewImage, type, title, price, isPremium, rating} = offer;
  const offerUrl = `${AppRoute.OfferRoom}${id}`;

  const handleMouseOver = () => {
    if (setActiveItem !== undefined) {
      setActiveItem(id);
    }
  };

  const handleMouseOut = () => {
    if (setActiveItem !== undefined) {
      setActiveItem(-1);
    }
  };

  return (
    <article
      className="cities__card place-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      key={id}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Apartment" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: changeRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
