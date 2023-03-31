import {Link} from 'react-router-dom';
import {Cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {cityChange} from '../../store/action';

function SitySort (): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities && Cities.length > 0 && Cities.map((city) => (
          <li key={city} className="locations__item">
            <Link
              className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
              to="/"
              onClick={(event) => {
                event.preventDefault();
                dispatch(cityChange(city));
              }}
            >
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SitySort;
