import {useState, useEffect, memo} from 'react';
import {SortsList} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {changeSort} from '../../store/sorting-process/sorting-process.slice';
import {getTypeSorting} from '../../store/sorting-process/sorting-process.selector';

function HotelSort (): JSX.Element {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getTypeSorting);

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
                dispatch(changeSort(sortItem));
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

export default memo(HotelSort);
