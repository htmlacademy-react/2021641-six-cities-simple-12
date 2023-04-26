import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Helmet} from 'react-helmet-async';
import OffersList from '../../components/offers-list/offers-list';
import CitySort from '../../components/city-sort/city-sort';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks/index/index';
import {getOffers} from '../../store/offers-data/offers-process.selector';
import {getCity} from '../../store/sorting-process/sorting-process.selector';

function SixCities(): JSX.Element {
  const activeOffer = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const filteredOffers = offers.filter(({city}) => city.name === activeOffer);
  const offer = filteredOffers.find((filtredOffer) => filtredOffer.city.name === activeOffer);

  const city = offer?.city;

  if (city === undefined) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <div className="page--main">
      <Header />
      <main className={`page__main page__main--index ${filteredOffers.length === 0 ? 'page__main--index-empty' : ''}`}>
        <Helmet>
          <title>main</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <CitySort />
        <div className="cities">
          <OffersList activeOffer={activeOffer} city={city} filteredOffers={filteredOffers} />
        </div>
      </main>
    </div>
  );
}

export default SixCities;
