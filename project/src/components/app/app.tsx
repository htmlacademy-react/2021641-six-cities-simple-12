import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks/index';
import {AppRoute} from '../../const';
import SixCities from '../../pages/six-cities/six-cities';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import ScrollTop from '../scroll-top/scroll-top';
import Spinner from '../spinner/spinner';
import { AuthorizationStatus } from '../../const';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (<Spinner />);
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<SixCities />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Room}
            element={<Room />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
