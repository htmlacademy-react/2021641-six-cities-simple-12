import {useAppDispatch} from '../../hooks/index';

import {fetchOffersAction} from '../../store/api-actions';

import './main-empty.css';

function MainEmpty(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="cities">
      <div className={'page__main cities__places-container container cities__places-container--empty'}>
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment</p>
            <button className="cities__button-empty" onClick={() => {dispatch(fetchOffersAction());}}>To try one more time</button>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>
    </div>
  );
}

export default MainEmpty;
