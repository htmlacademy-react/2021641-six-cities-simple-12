import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SixCities from '../../pages/six-cities/six-cities';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import {Offer} from '../../types/offer';
import {Reviews} from '../../types/review';

type AppSitiesProps = {
  offerCount: number;
  offers: Offer[];
  reviews: Reviews[];
}

function App({offerCount, offers, reviews}: AppSitiesProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<SixCities offerCount={offerCount} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Property reviews={reviews} />}
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
