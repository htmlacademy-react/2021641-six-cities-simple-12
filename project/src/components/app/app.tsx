import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SixCities from '../../pages/six-cities/six-cities';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
// import Effects from '../../pages/Effects/Effects';
import OfferCard from '../offer-card/offer-card';
import {Offer} from '../../types/offer';

type AppSitiesProps = {
  offerCount: number;
  offers: Offer;
}

function App({offerCount, offers}: AppSitiesProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<SixCities offerCount={offerCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<OfferCard />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
