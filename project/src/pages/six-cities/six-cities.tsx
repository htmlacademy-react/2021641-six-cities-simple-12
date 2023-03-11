import {useState} from 'react';
import {Link} from 'react-router-dom';
import OfferCard from '../../components/offer-card/offer-card';
import SitySort from '../../components/sity-sort/sity-sort';
import HotelSort from '../../components/hotel-sort/hotel-sort';
import {Offer} from '../../types/offer';

type SixCitiesProps = {
  offerCount: number;
  offers: Offer[];
}

function SixCities({offerCount, offers}: SixCitiesProps): JSX.Element {
  const [, setOfferCard] = useState(0);

  const handleOfferCardMouseEnter = (id: number) => {
    setOfferCard(id);
  };

  return (
    <div className="page--main">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SitySort />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <HotelSort />
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) =>
                  (<OfferCard key={offer.id}
                    offer={offer}
                    onOfferCardMouseEnter={handleOfferCardMouseEnter}
                  />
                  ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SixCities;
