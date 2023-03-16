import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute} from '../../const';
import changeRating from '../../utils';

type OfferProps = {
  offer: Offer;
  setCard(event: number): void;
};

function OfferCard ({offer, setCard}: OfferProps): JSX.Element {
  const {id, src, type, description, price, premium, rating} = offer;
  const offerUrl = `${AppRoute.OfferRoom}${id}`;

  const handleCardMouseEnter = (event: React.MouseEvent<HTMLDivElement>): void => {
    setCard(id);
  };

  const handleCardMouseLeave = (): void => {
    setCard(-1);
  };

  return (
    <article className="cities__card place-card" key={id}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {premium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={src[0]} width="260" height="200" alt="Apartment" />
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
            <span className="visually-hidden">{changeRating(rating)}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
