import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import SixCities from '../../pages/six-cities/six-cities';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import {Offer, City} from '../../types/offer';
import {Reviews} from '../../types/review';

type AppSitiesProps = {
  offers: Offer[];
  reviews: Reviews[];
  city: City;
}

function App({offers, reviews, city}: AppSitiesProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<SixCities offers={offers} city={city} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Room offers={offers} reviews={reviews} city={city} />}
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
