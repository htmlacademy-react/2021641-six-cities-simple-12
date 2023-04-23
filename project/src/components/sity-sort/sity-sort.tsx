import {Link} from 'react-router-dom';
import {Cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeCity} from '../../store/sorting-process/sorting-process.slice';
import {getCity} from '../../store/sorting-process/sorting-process.selector';

function SitySort (): JSX.Element {
  const activeOffer = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities && Cities.length > 0 && Cities.map((city) => (
            <li key={city} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${city === activeOffer ? 'tabs__item--active' : ''}`}
                to="/"
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(changeCity(city));
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SitySort;
