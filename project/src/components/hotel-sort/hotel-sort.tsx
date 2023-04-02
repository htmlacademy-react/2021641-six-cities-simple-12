import {useState} from 'react';
import {SortsList} from '../../const';
import {useAppSelector} from '../../hooks/index';
import HotelSortItem from '../hotel-sort-item/hotel-sort-item';

function HotelSort (): JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);
  const sortType = useAppSelector((state) => state.sortType);

  const toggleSort = () => {
    setVisible(!visible);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={toggleSort} className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${visible === false ? '' : 'places__options--opened'}`}>
        {
          Object.values(SortsList).map((sortItem) => (
            <HotelSortItem
              key={sortItem}
              sortType={sortItem}
              toggleSort={toggleSort}
            />
          ))
        }
      </ul>
    </form>
  );
}

export default HotelSort;
