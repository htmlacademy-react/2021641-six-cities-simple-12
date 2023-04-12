import {Link, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useRef, FormEvent, useState, SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks/index';
import {AuthData} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {AppRoute, Cities} from '../../const';
import {getRandomArrayItem} from '../../utils';
import Header from '../../components/header/header';
import {cityChange} from '../../store/action';

function Login(): JSX.Element {
  const [randomCity,] = useState(getRandomArrayItem(Cities));
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const onClickSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.Root);
    }
  };

  const onClickRandomCity = (evt: SyntheticEvent<EventTarget>) => {
    evt.preventDefault();
    dispatch(cityChange(randomCity as string));
    navigate(AppRoute.Root, {replace: true});
  };

  return (
    <div className="page--login">
      <Header />

      <main className="page__main page__main--login">
        <Helmet>
          <title>login</title>
        </Helmet>
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={onClickSubmit} className="login__form form" action="" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={(evt) => onClickRandomCity(evt)} to={AppRoute.Root}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
