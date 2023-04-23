import {Route, Routes} from 'react-router-dom';
import {HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks/index';
import {AppRoute, AuthorizationStatus} from '../../const';
import SixCities from '../../pages/six-cities/six-cities';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import ScrollTop from '../scroll-top/scroll-top';
import Spinner from '../spinner/spinner';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selector';
import {getOffersDataLoading} from '../../store/offers-data/offers-process.selector';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (<Spinner />);
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
