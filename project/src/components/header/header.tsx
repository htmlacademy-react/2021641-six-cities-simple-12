import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';
import {AuthorizationStatus, Default} from '../../const';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/user-process.selector';

function Header ():JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ?
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{
                        backgroundImage: `url(${userData?.avatarUrl ?? Default.avatar})`,
                        borderRadius: '50%',
                      }}
                    >
                    </div>
                    <span className="header__user-name user__name">{userData?.email}</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                    className="header__nav-link"
                    to={''}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      :
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}

export default Header;
