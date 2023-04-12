import {useState, useEffect} from 'react';
import {SortsList} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {sortChange} from '../../store/action';
// import HotelSortItem from '../hotel-sort-item/hotel-sort-item';

function HotelSort (): JSX.Element {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  useEffect(() => {
    const sortingType = document.querySelector('.places__sorting-type');
    const closeSortType = (evt: MouseEvent) => {
      if (!sortingType) {
        return;
      }

      if (evt.target !== sortingType) {
        setVisible(false);
      }
    };

    document.addEventListener('click', closeSortType);

    return () => {
      document.removeEventListener('click', closeSortType);
    };
  }, []);

  // const toggleSort = () => {
  //   setVisible(!visible);
  // };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => setVisible(!visible)} className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${visible ? 'places__options--opened' : ''}`}>
        {
          Object.values(SortsList).map((sortItem) => (
            <li
              className={`places__option ${sortItem === sortType ? 'places__option__active' : ''}`}
              key={sortItem}
              onClick={() => {
                dispatch(sortChange(sortItem));
              }}
              tabIndex={0}
            >
              {sortItem}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default HotelSort;
