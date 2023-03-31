import {Link, Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Helmet} from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import SitySort from '../../components/sity-sort/sity-sort';
import {Offer, City} from '../../types/offer';
// import {useEffect} from 'react';
import {useAppSelector} from '../../hooks/index';
// import {loadOffer} from '../../store/action';

type SixCitiesProps = {
  offers: Offer[];
  citys: City[];
}

function SixCities({offers, citys}: SixCitiesProps): JSX.Element {
  const activeOffer = useAppSelector((state) => state.city);
  const filteredOffers = offers.filter(({city}) => city.name === activeOffer);
  const city = citys.find((item) => item.name === activeOffer);

  if (city === undefined) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

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
      <main className={`page__main page__main--index ${offers.length < 1 ? 'page__main--index-empty' : ''}`}>
        <Helmet>
          <title>main</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SitySort />
        </div>
        <div className="cities">
          <OffersList city={city} offers={filteredOffers} className="cities" />
        </div>
      </main>
    </div>
  );
}

export default SixCities;
